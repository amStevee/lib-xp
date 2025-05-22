-- AlterTable
ALTER TABLE "patron" ADD COLUMN     "isEmailVerified" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "email_verification_token" (
    "id" TEXT NOT NULL,
    "patronId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_token_id_key" ON "email_verification_token"("id");

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_token_patronId_key" ON "email_verification_token"("patronId");

-- CreateIndex
CREATE UNIQUE INDEX "email_verification_token_email_key" ON "email_verification_token"("email");

-- CreateIndex
CREATE INDEX "email_verification_token_patronId_idx" ON "email_verification_token"("patronId");

-- AddForeignKey
ALTER TABLE "email_verification_token" ADD CONSTRAINT "email_verification_token_patronId_fkey" FOREIGN KEY ("patronId") REFERENCES "patron"("id") ON DELETE CASCADE ON UPDATE CASCADE;
