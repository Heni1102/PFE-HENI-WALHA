import { Elysia } from "elysia";
import { compareHashAsync, hashStringAsync } from "../utils";
import { t } from "elysia";
import { getDB } from "../db";

export const loginRequestSchema = t.Object({
	email: t.String(),
	password: t.String(),
});

export const loginResponseSchema = t.Object({
	id: t.String(),
	email: t.String(),
	username: t.String(),
	refresh_token: t.String(),
});

export const retrieveAdminByEmail = async (email: string) => {
	const db = getDB();
	const admin = db.query.admins.findFirst({
		where: (admin, { eq }) => eq(admin.email, email),
	});
	return await admin.execute();
};

export default new Elysia({ prefix: "/auth" })
	.post(
		"/login",
		async ({ body, error }) => {
			const admin = await retrieveAdminByEmail(body.email);
			if (!admin) return error(404, "Not found");

			const hash = await hashStringAsync(body.password);
			const valid = await compareHashAsync(hash, admin.password);
			if (!valid) return error(401, "Unauthorized");

			return {
				id: admin.id,
				email: admin.email,
				usename: admin.username,
				refresh_token: admin.refresh_token,
			};
		},
		{
			body: loginRequestSchema,
		},
	)
	.post("/refresh", () => "refresh");
