/*
  Warnings:

  - You are about to drop the `CocktailIngredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CocktailIngredient" DROP CONSTRAINT "CocktailIngredient_cocktailId_fkey";

-- DropForeignKey
ALTER TABLE "CocktailIngredient" DROP CONSTRAINT "CocktailIngredient_ingredientId_fkey";

-- AlterTable
ALTER TABLE "Cocktail" ADD COLUMN     "ingredients" JSONB;

-- DropTable
DROP TABLE "CocktailIngredient";

-- DropTable
DROP TABLE "Ingredient";
