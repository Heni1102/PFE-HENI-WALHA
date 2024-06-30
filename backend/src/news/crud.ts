import { eq } from "drizzle-orm";
import { getDB, news } from "../db";
import type { NewsCreate } from "../types";

export const getOne = async (id: string) => {
	const db = getDB();
	const query = db.query.news.findFirst({
		where: (newArticle, { eq }) => eq(newArticle.id, id),
	});
	return await query.execute();
};

export const getAll = async () => {
	const db = getDB();
	const query = db.query.news.findMany();
	return await query.execute();
};

export const create = async (newArticle: NewsCreate) => {
	const db = getDB();
	const query = db
		.insert(news)
		.values(newArticle)
		.returning()
		.catch((e) => {
			console.error(e);
			return undefined;
		});

	return await query;
};

export const update = async (
	id: string,
	newArticle: Partial<NewsCreate> & { id?: string },
) => {
	const db = getDB();
	const query = db
		.update(news)
		.set(newArticle)
		.where(eq(news.id, id))
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
		.delete(news)
		.where(eq(news.id, id))
		.returning()
		.catch((e) => {
			console.error(e);
			return undefined;
		});
	return await query;
};
