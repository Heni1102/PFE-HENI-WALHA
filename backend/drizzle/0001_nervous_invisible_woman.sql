CREATE TABLE IF NOT EXISTS "news" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"code" text NOT NULL,
	"label" text NOT NULL,
	"description" text,
	"price" numeric NOT NULL,
	"active" boolean NOT NULL,
	"photo_url1" text NOT NULL,
	"photo_url2" text,
	"photo_url3" text,
	CONSTRAINT "news_code_unique" UNIQUE("code")
);
--> statement-breakpoint
ALTER TABLE "admins" ADD COLUMN "refresh_token" text;--> statement-breakpoint
ALTER TABLE "admins" ADD CONSTRAINT "admins_refresh_token_unique" UNIQUE("refresh_token");