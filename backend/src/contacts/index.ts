import { Elysia } from "elysia";
import * as crud from "./crud";
import { contactCRUD } from "../types";
import { authGuard, useJWT } from "../utils";
import bearer from "@elysiajs/bearer";

export default new Elysia({ prefix: "/contacts" })
	.use(useJWT)
	.use(bearer())
	.get("/:id", async (ctx) => {
		const id = ctx.params.id;
		const contact = await crud.getOne(id);
		if (!contact) return ctx.error(404, "contact not found");

		return contact;
	})

	.get("/", async () => {
		return await crud.getAll();
	})

	.post(
		"/",
		async (ctx) => {
			const contact = ctx.body;

			const created = await crud.create(contact);
			if (!created) return ctx.error(500, "Failed to create contact");
			return created[0];
		},
		{
			body: contactCRUD.create,
		},
	)

	.patch(
		"/:id",
		async (ctx) => {
			const contact = ctx.body;
			const id = ctx.params.id;
			const created = await crud.update(id, contact);
			if (!created) return ctx.error(500, "Failed to create contact");
			return created[0];
		},
		{
			body: contactCRUD.update,
			async beforeHandle({ bearer, error, JWT }) {
				const guard = await authGuard(bearer, JWT);
				if (guard !== true) return error(guard.code, guard.msg);
			},
		},
	)

	.delete(
		"/:id",
		async (ctx) => {
			const id = ctx.params.id;
			const deleted = await crud.deleteOne(id);
			if (!deleted) return ctx.error(500, "Failed to delete contact");
			return deleted[0];
		},
		{
			async beforeHandle({ bearer, error, JWT }) {
				const guard = await authGuard(bearer, JWT);
				if (guard !== true) return error(guard.code, guard.msg);
			},
		},
	);
