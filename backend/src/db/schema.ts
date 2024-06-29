import { boolean, pgTable, text, uuid, real } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
	id: uuid("id").primaryKey().defaultRandom(),
	code: text("code").notNull().unique(),
	label: text("label").notNull(),
	description: text("description"),
	price: real("price").notNull(),
	active: boolean("active").notNull(),
	PhotoUrl1: text("photo_url1").notNull(),
	PhotoUrl2: text("photo_url2"),
	PhotoUrl3: text("photo_url3"),
});

export const news = pgTable("news", {
	id: uuid("id").primaryKey().defaultRandom(),
	title: text("label").notNull(),
	description: text("description"),
	active: boolean("active").notNull(),
	PhotoUrl: text("photo_url").notNull(),
});

export const admins = pgTable("admins", {
	id: uuid("id").primaryKey().defaultRandom(),
	username: text("name").notNull(),
	email: text("email").notNull().unique(),
	password: text("password").notNull(),
	refresh_token: text("refresh_token").unique(),
});
