import { Elysia } from "elysia";
import * as crud from "./crud";
import { newsCRUD } from "../db/types";

export default new Elysia({ prefix: "/news" })
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
		{ body: newsCRUD.create },
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
		{ body: newsCRUD.update },
	)

	.delete("/:id", async (ctx) => {
		const id = ctx.params.id;
		const deleted = await crud.deleteOne(id);
		if (!deleted) return ctx.error(500, "Failed to delete article");
		return deleted[0];
	});
