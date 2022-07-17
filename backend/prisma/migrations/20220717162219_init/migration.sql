/*
  Warnings:

  - The primary key for the `Manga` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Manga` table. All the data in the column will be lost.
  - Added the required column `manga` to the `Manga` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Manga" (
    "manga" TEXT NOT NULL PRIMARY KEY,
    "daysToNextChapt" INTEGER NOT NULL,
    "hoursToNextChapt" INTEGER NOT NULL
);
INSERT INTO "new_Manga" ("daysToNextChapt", "hoursToNextChapt") SELECT "daysToNextChapt", "hoursToNextChapt" FROM "Manga";
DROP TABLE "Manga";
ALTER TABLE "new_Manga" RENAME TO "Manga";
CREATE UNIQUE INDEX "Manga_manga_key" ON "Manga"("manga");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
