/*
  Warnings:

  - You are about to drop the column `amount` on the `Ingredient` table. All the data in the column will be lost.
  - You are about to drop the column `cocktailId` on the `Ingredient` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_cocktailId_fkey";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "amount",
DROP COLUMN "cocktailId";

-- CreateTable
CREATE TABLE "CocktailIngredient" (
    "id" TEXT NOT NULL,
    "cocktailId" TEXT NOT NULL,
    "ingredientId" TEXT NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "CocktailIngredient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_name_key" ON "Ingredient"("name");

-- AddForeignKey
ALTER TABLE "CocktailIngredient" ADD CONSTRAINT "CocktailIngredient_cocktailId_fkey" FOREIGN KEY ("cocktailId") REFERENCES "Cocktail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CocktailIngredient" ADD CONSTRAINT "CocktailIngredient_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
