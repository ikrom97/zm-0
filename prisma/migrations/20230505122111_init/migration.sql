/*
  Warnings:

  - Added the required column `localeId` to the `Quote` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localeId` to the `Tag` table without a default value. This is not possible if the table is not empty.
  - Added the required column `localeId` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbImage` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Quote" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quote" TEXT NOT NULL,
    "localeId" INTEGER NOT NULL,
    CONSTRAINT "Quote_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Quote" ("id", "quote") SELECT "id", "quote" FROM "Quote";
DROP TABLE "Quote";
ALTER TABLE "new_Quote" RENAME TO "Quote";
CREATE TABLE "new_Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "localeId" INTEGER NOT NULL,
    CONSTRAINT "Tag_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tag" ("id", "title") SELECT "id", "title" FROM "Tag";
DROP TABLE "Tag";
ALTER TABLE "new_Tag" RENAME TO "Tag";
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "thumbImage" TEXT NOT NULL,
    "alternativeText" TEXT,
    "localeId" INTEGER NOT NULL,
    CONSTRAINT "Post_localeId_fkey" FOREIGN KEY ("localeId") REFERENCES "Locale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Post" ("alternativeText", "id", "image") SELECT "alternativeText", "id", "image" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
