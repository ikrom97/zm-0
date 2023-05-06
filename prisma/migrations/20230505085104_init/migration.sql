/*
  Warnings:

  - You are about to drop the `TagsOnQuotes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "TagsOnQuotes";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Locale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "locale" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "QuotesOnTags" (
    "quoteId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    PRIMARY KEY ("quoteId", "tagId"),
    CONSTRAINT "QuotesOnTags_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "Quote" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "QuotesOnTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
