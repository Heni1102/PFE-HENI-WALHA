import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import products from "./products";
import news from "./news";
import auth from "./auth";
import { useCors, useJWT } from "./utils";

const app = new Elysia()
	.use(useCors)
	.use(useJWT)
	.use(swagger({ path: "/" }))

	.use(auth)
	.use(products)
	.use(news)

	.listen(3001);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
