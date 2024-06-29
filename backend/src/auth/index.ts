import { Elysia } from "elysia";
import { compareHashAsync, hashStringAsync, useJWT } from "../utils";
import { t } from "elysia";
import { admins, getDB } from "../db";
import type { JwtPayload } from "../types";
import { eq } from "drizzle-orm";

const loginRequestSchema = t.Object({
	email: t.String(),
	password: t.String(),
});

const retrieveAdminByEmail = async (email: string) => {
	const db = getDB();
	const admin = db.query.admins.findFirst({
		where: (admin, { eq }) => eq(admin.email, email),
	});
	return await admin.execute();
};

const updateToken = async (id: string, token: string) => {
	const db = getDB();
	const admin = db
		.update(admins)
		.set({ refresh_token: token })
		.where(eq(admins.id, id))
		.returning()
		.catch((e) => {
			console.error(e);
			return undefined;
		});
	return await admin;
};

export default new Elysia({ prefix: "/auth" }).use(useJWT).post(
	"/login",
	async (ctx) => {
		const admin = await retrieveAdminByEmail(ctx.body.email);
		if (!admin) return ctx.error(404, "Not found");

		const hash = await hashStringAsync(ctx.body.password);
		const valid = await compareHashAsync(hash, admin.password);
		if (!valid) return ctx.error(401, "Unauthorized");

		const payload: JwtPayload = {
			id: admin.id,
			email: admin.email,
			username: admin.username,
		};

		const jwt = await ctx.JWT.sign(payload);
		const updated = await updateToken(admin.id, jwt);
		if (!updated) return ctx.error(500, "Internal server error");

		return {
			...payload,
			refresh_token: jwt,
		};
	},
	{
		body: loginRequestSchema,
	},
);
