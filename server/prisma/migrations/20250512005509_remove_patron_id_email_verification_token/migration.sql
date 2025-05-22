/*
  Warnings:

  - You are about to drop the column `patronId` on the `email_verification_token` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "email_verification_token" DROP CONSTRAINT "email_verification_token_patronId_fkey";

-- DropIndex
DROP INDEX "email_verification_token_patronId_idx";

-- DropIndex
DROP INDEX "email_verification_token_patronId_key";

-- AlterTable
ALTER TABLE "email_verification_token" DROP COLUMN "patronId";
