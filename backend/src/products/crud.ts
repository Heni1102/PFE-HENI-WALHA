import { eq } from "drizzle-orm";
import { getDB, products } from "../db";
import type { ProductCreate } from "../types";

export const getOne = async (id: string) => {
	const db = getDB();
	const query = db.query.products.findFirst({
		where: (product, { eq }) => eq(product.id, id),
	});
	return await query.execute();
};

export const getAll = async () => {
	const db = getDB();
	const query = db.query.products.findMany();
	return await query.execute();
};

export const create = async (product: ProductCreate) => {
	const db = getDB();
	const query = db
		.insert(products)
		.values(product)
		.returning()
		.catch((e) => {
			console.error(e);
			return undefined;
		});

	return await query;
};

export const update = async (
	id: string,
	product: Partial<ProductCreate> & { id?: string },
) => {
	const db = getDB();
	const query = db
		.update(products)
		.set(product)
		.where(eq(products.id, id))
		.returning()
		.catch((e) => {
			console.error(e);
			return undefined;
		});
	return await query;
};

export const deleteOne = async (id: string) => {
	const db = getDB();
	const query = db
		.delete(products)
		.where(eq(products.id, id))
		.returning()
		.catch((e) => {
			console.error(e);
			return undefined;
		});
	return await query;
};
