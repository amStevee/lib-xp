-- CreateEnum
CREATE TYPE "GMD" AS ENUM ('Monograph', 'Serial', 'Palmphlet', 'Dictionary');

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sid" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "librarian" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "displayname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profile_img" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "rank" INTEGER NOT NULL,
    "books_entered" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "subject" TEXT[],
    "imprint" TEXT NOT NULL,
    "collation" TEXT NOT NULL,
    "G_M_D" "GMD" NOT NULL,
    "book_cover" TEXT NOT NULL,
    "material_number" TEXT NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "bibilography" TEXT NOT NULL,
    "Keywords" TEXT[],
    "other_Title" TEXT,
    "co_author" TEXT,
    "editor" TEXT,
    "edition" TEXT,
    "series" TEXT,
    "Web_address" TEXT,
    "entered_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "patron" (
    "id" TEXT NOT NULL,
    "google_Id" TEXT,
    "firstname" TEXT,
    "lastname" TEXT,
    "displayname" TEXT NOT NULL,
    "address" TEXT,
    "contact" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "profile_img" TEXT NOT NULL,
    "borrowed_book" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "book_likes" (
    "book_id" TEXT NOT NULL,
    "patron_id" TEXT NOT NULL,
    "liked_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "book_consulted" (
    "book_id" TEXT NOT NULL,
    "patron_id" TEXT NOT NULL,
    "consulted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "circulation" (
    "book_id" TEXT NOT NULL,
    "patron_id" TEXT NOT NULL,
    "checkout" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date_due" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sid_key" ON "Session"("sid");

-- CreateIndex
CREATE UNIQUE INDEX "librarian_id_key" ON "librarian"("id");

-- CreateIndex
CREATE UNIQUE INDEX "librarian_email_key" ON "librarian"("email");

-- CreateIndex
CREATE UNIQUE INDEX "librarian_contact_key" ON "librarian"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "librarian_books_entered_key" ON "librarian"("books_entered");

-- CreateIndex
CREATE UNIQUE INDEX "book_id_key" ON "book"("id");

-- CreateIndex
CREATE INDEX "book_title_idx" ON "book"("title");

-- CreateIndex
CREATE INDEX "book_author_idx" ON "book"("author");

-- CreateIndex
CREATE UNIQUE INDEX "patron_id_key" ON "patron"("id");

-- CreateIndex
CREATE UNIQUE INDEX "patron_google_Id_key" ON "patron"("google_Id");

-- CreateIndex
CREATE UNIQUE INDEX "patron_contact_key" ON "patron"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "patron_email_key" ON "patron"("email");

-- CreateIndex
CREATE UNIQUE INDEX "patron_borrowed_book_key" ON "patron"("borrowed_book");

-- CreateIndex
CREATE UNIQUE INDEX "book_likes_book_id_key" ON "book_likes"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "book_likes_patron_id_key" ON "book_likes"("patron_id");

-- CreateIndex
CREATE UNIQUE INDEX "book_consulted_book_id_key" ON "book_consulted"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "book_consulted_patron_id_key" ON "book_consulted"("patron_id");

-- CreateIndex
CREATE UNIQUE INDEX "circulation_book_id_key" ON "circulation"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "circulation_patron_id_key" ON "circulation"("patron_id");

-- AddForeignKey
ALTER TABLE "book_likes" ADD CONSTRAINT "book_likes_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_likes" ADD CONSTRAINT "book_likes_patron_id_fkey" FOREIGN KEY ("patron_id") REFERENCES "patron"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_consulted" ADD CONSTRAINT "book_consulted_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "book_consulted" ADD CONSTRAINT "book_consulted_patron_id_fkey" FOREIGN KEY ("patron_id") REFERENCES "patron"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "circulation" ADD CONSTRAINT "circulation_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "circulation" ADD CONSTRAINT "circulation_patron_id_fkey" FOREIGN KEY ("patron_id") REFERENCES "patron"("id") ON DELETE CASCADE ON UPDATE CASCADE;
