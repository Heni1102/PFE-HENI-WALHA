import cors from "@elysiajs/cors";
import jwt from "@elysiajs/jwt";
import type { JwtParam } from "../types";
import preferences from "../preferences";
export * from "./image";

export const hashStringAsync = async (str: string) => {
	const bcryptHash = await Bun.password.hash(str, {
		algorithm: "bcrypt",
		cost: 4,
	});
	return bcryptHash;
};

export const compareHashAsync = async (str: string, hash: string) => {
	const result = await Bun.password.verify(str, hash);
	return result;
};

export const useCors = cors({
	origin: true,
});
export const useJWT = jwt({
	name: "JWT",
	secret: process.env.JWT_SECRET || "secret",
	exp: process.env.JWT_EXP || "30d",
});

export const authGuard = async (bearer: string | undefined, jwt: JwtParam) => {
	if (!preferences.useAuth) return true;
	jwt.verify;
	if (!bearer) {
		return { code: 400, msg: "Bearer token is required" };
	}
	const token = await jwt.verify(bearer);
	if (!token) {
		return { code: 401, msg: "Unauthorized" };
	}
	return true;
};
