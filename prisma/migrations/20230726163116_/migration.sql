/*
  Warnings:

  - A unique constraint covering the columns `[id,belongsToId]` on the table `Cocktail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cocktail_id_belongsToId_key" ON "Cocktail"("id", "belongsToId");
