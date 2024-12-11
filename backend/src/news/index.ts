import { Elysia } from "elysia";
import * as crud from "./crud";
import { newsCRUD } from "../types";
import { authGuard, useJWT } from "../utils";
import bearer from "@elysiajs/bearer";

export default new Elysia({ prefix: "/news" })
	.use(useJWT)
	.use(bearer())
	.get("/:id", async (ctx) => {
		const id = ctx.params.id;

		const news = await crud.getOne(id);
		if (!news) return ctx.error(404, "News article not found");

		return news;
	})

	.get("/", async () => {
		return await crud.getAll();
	})

	.post(
		"/",
		async (ctx) => {
			const news = ctx.body;
			const created = await crud.create(news);
			if (!created) return ctx.error(500, "Failed to create article");
			return created[0];
		},
		{
			body: newsCRUD.create,
			async beforeHandle({ bearer, error, JWT }) {
				const guard = await authGuard(bearer, JWT);
				if (guard !== true) return error(guard.code, guard.msg);
			},
		},
	)

	.patch(
		"/:id",
		async (ctx) => {
			const article = ctx.body;
			const id = ctx.params.id;
			const created = await crud.update(id, article);
			if (!created) return ctx.error(500, "Failed to create article");
			return created[0];
		},
		{
			body: newsCRUD.update,
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
			if (!deleted) return ctx.error(500, "Failed to delete article");
			return deleted[0];
		},
		{
			async beforeHandle({ bearer, error, JWT }) {
				const guard = await authGuard(bearer, JWT);
				if (guard !== true) return error(guard.code, guard.msg);
			},
		},
	);
