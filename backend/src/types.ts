import { createInsertSchema, createSelectSchema } from "drizzle-typebox";
import { admins, contacts, news, products } from "./db/schema";
import { type Static, t } from "elysia";
import type { PgTable } from "drizzle-orm/pg-core";
import type { JWTPayloadSpec } from "@elysiajs/jwt";

export const createCRUDTyping = <T extends PgTable>(schema: T) => {
	const createSchema = createInsertSchema(schema);
	const selectSchema = createSelectSchema(schema);
	//@ts-expect-error
	const updateSchema = t.Partial(createSchema, createSchema.id);
	// const allPartial = t.Partial(createSchema, createSchema.id);
	// const no_id = t.Omit(allPartial, ["id"]);
	// const updateSchema = t.Composite([t.Object({ id: t.String() }), no_id]);
	const deleteSchema = t.Object({ id: t.String() });

	return {
		create: createSchema,
		select: selectSchema,
		update: updateSchema,
		delete: deleteSchema,
	};
};

export const productCRUD = createCRUDTyping(products);
export type ProductCreate = Static<typeof productCRUD.create>;
export type ProductSelect = Static<typeof productCRUD.select>;
export type ProductUpdate = Static<typeof productCRUD.update>;
export type ProductDelete = Static<typeof productCRUD.delete>;

export const newsCRUD = createCRUDTyping(news);
export type NewsCreate = Static<typeof newsCRUD.create>;
export type NewsSelect = Static<typeof newsCRUD.select>;
export type NewsUpdate = Static<typeof newsCRUD.update>;
export type NewsDelete = Static<typeof newsCRUD.delete>;

export const adminCRUD = createCRUDTyping(admins);
export type adminCreate = Static<typeof adminCRUD.create>;
export type adminSelect = Static<typeof adminCRUD.select>;
export type adminUpdate = Static<typeof adminCRUD.update>;
export type adminDelete = Static<typeof adminCRUD.delete>;

export const contactCRUD = createCRUDTyping(contacts);
export type contactCreate = Static<typeof contactCRUD.create>;
export type contactSelect = Static<typeof contactCRUD.select>;
export type contactUpdate = Static<typeof contactCRUD.update>;
export type contactDelete = Static<typeof contactCRUD.delete>;

export type JwtParam = {
	readonly sign: (
		morePayload: Record<string, string | number> & JWTPayloadSpec,
	) => Promise<string>;
	readonly verify: (
		jwt?: string | undefined,
	) => Promise<false | (Record<string, string | number> & JWTPayloadSpec)>;
};

export type JwtPayload = {
	id: string;
	username: string;
	email: string;
};
