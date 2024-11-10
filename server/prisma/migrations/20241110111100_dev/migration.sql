/*
  Warnings:

  - You are about to drop the column `Web_address` on the `book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "Web_address",
ADD COLUMN     "web_address" TEXT,
ALTER COLUMN "entered_at" SET DEFAULT CURRENT_TIMESTAMP;
