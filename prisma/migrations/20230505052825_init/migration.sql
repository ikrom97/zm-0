/*
  Warnings:

  - Added the required column `assignedBy` to the `TagsOnQuotes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_TagsOnQuotes" (
    "quoteId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "assignedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    PRIMARY KEY ("quoteId", "tagId"),
    CONSTRAINT "TagsOnQuotes_quoteId_fkey" FOREIGN KEY ("quoteId") REFERENCES "Quote" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TagsOnQuotes_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_TagsOnQuotes" ("quoteId", "tagId") SELECT "quoteId", "tagId" FROM "TagsOnQuotes";
DROP TABLE "TagsOnQuotes";
ALTER TABLE "new_TagsOnQuotes" RENAME TO "TagsOnQuotes";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
