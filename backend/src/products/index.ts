import { Elysia } from "elysia";
import * as crud from "./crud";
import { productCRUD } from "../db/types";

export default new Elysia({ prefix: "/produits" })
	.get("/:id", async (ctx) => {
		const profile = await ctx.jwt.verify(ctx.cookie.auth.value);

		if (!profile) {
			set.status = 401;
			return "Unauthorized";
		}

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
		{ body: productCRUD.create },
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
		{ body: productCRUD.update },
	)

	.delete("/:id", async (ctx) => {
		const id = ctx.params.id;
		const deleted = await crud.deleteOne(id);
		if (!deleted) return ctx.error(500, "Failed to delete product");
		return deleted[0];
	});
