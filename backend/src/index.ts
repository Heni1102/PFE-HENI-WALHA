import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import products from "./products";
import news from "./news";
import auth from "./auth";
import { useCors, useJWT } from "./utils";
import contacts from "./contacts";

const app = new Elysia()
	.use(useCors)
	.use(useJWT)
	.use(swagger({ path: "/" }))

	.use(auth)
	.use(products)
	.use(news)
	.use(contacts)

	.listen(3001);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
