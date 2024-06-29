import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import products from "./products";
import news from "./news";
import auth from "./auth";
import cors from "@elysiajs/cors";
import jwt from "@elysiajs/jwt";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

const corsConfig = {
	origin: true,
};
const jwtConfig = {
	name: "JWT",
	secret: process.env.JWT_SECRET || "secret",
	exp: process.env.JWT_EXP || "30d",
};

new Elysia()
	.use(cors(corsConfig))
	.use(jwt(jwtConfig))
	.use(swagger({ path: "/" }))

	.use(auth)
	.use(products)
	.use(news)

	.listen(3001);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
