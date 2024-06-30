ALTER TABLE "news" RENAME COLUMN "photo_url1" TO "photo_url";--> statement-breakpoint
ALTER TABLE "news" DROP CONSTRAINT "news_code_unique";--> statement-breakpoint
ALTER TABLE "news" DROP COLUMN IF EXISTS "code";--> statement-breakpoint
ALTER TABLE "news" DROP COLUMN IF EXISTS "price";--> statement-breakpoint
ALTER TABLE "news" DROP COLUMN IF EXISTS "photo_url2";--> statement-breakpoint
ALTER TABLE "news" DROP COLUMN IF EXISTS "photo_url3";