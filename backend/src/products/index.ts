import { Elysia } from "elysia";
import * as crud from "./crud";
import { productCRUD } from "../types";
import { authGuard, useJWT } from "../utils";
import bearer from "@elysiajs/bearer";

export default new Elysia({ prefix: "/produits" })
	.use(useJWT)
	.use(bearer())
	.get("/:id", async (ctx) => {
		const id = ctx.params.id;
		const product = await crud.getOne(id);
		if (!product) return ctx.error(404, "Product not found");

		return product;
	})

	.get("/", async () => {
		return await crud.getAll();
	})

	.post(
		"/",
		async (ctx) => {
			const product = ctx.body;
			const created = await crud.create(product);
			if (!created) return ctx.error(500, "Failed to create product");
			return created[0];
		},
		{
			body: productCRUD.create,
			async beforeHandle({ bearer, error, JWT }) {
				const guard = await authGuard(bearer, JWT);
				if (guard !== true) return error(guard.code, guard.msg);
			},
		},
	)

	.patch(
		"/:id",
		async (ctx) => {
			const product = ctx.body;
			const id = ctx.params.id;
			const created = await crud.update(id, product);
			if (!created) return ctx.error(500, "Failed to create product");
			return created[0];
		},
		{
			body: productCRUD.update,
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
			if (!deleted) return ctx.error(500, "Failed to delete product");
			return deleted[0];
		},
		{
			async beforeHandle({ bearer, error, JWT }) {
				const guard = await authGuard(bearer, JWT);
				if (guard !== true) return error(guard.code, guard.msg);
			},
		},
	);
