-- CreateTable
CREATE TABLE "Manga" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "daysToNextChapt" INTEGER NOT NULL,
    "hoursToNextChapt" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Manga_id_key" ON "Manga"("id");
