import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

export const getDB = () => {
	const queryClient = postgres(process.env.DB || "");
	const db = drizzle(queryClient, { schema });
	return db;
};

export * from "./schema";
