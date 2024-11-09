/*
  Warnings:

  - You are about to drop the column `borrowed_book` on the `patron` table. All the data in the column will be lost.
  - You are about to drop the column `contact` on the `patron` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[displayname]` on the table `patron` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[borrowed_books]` on the table `patron` will be added. If there are existing duplicate values, this will fail.
  - Made the column `firstname` on table `patron` required. This step will fail if there are existing NULL values in that column.
  - Made the column `lastname` on table `patron` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "patron_borrowed_book_key";

-- DropIndex
DROP INDEX "patron_contact_key";

-- AlterTable
ALTER TABLE "patron" DROP COLUMN "borrowed_book",
DROP COLUMN "contact",
ADD COLUMN     "borrowed_books" TEXT[],
ALTER COLUMN "firstname" SET NOT NULL,
ALTER COLUMN "lastname" SET NOT NULL,
ALTER COLUMN "displayname" DROP NOT NULL,
ALTER COLUMN "profile_img" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "patron_displayname_key" ON "patron"("displayname");

-- CreateIndex
CREATE UNIQUE INDEX "patron_borrowed_books_key" ON "patron"("borrowed_books");
