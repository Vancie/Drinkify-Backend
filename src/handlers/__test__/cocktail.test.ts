import * as cocktail from '../cocktail'

describe('cocktail handler', () => {
    it("Should create a new cocktail", async () => {
        const req = {
            body: {
                "name": "Old Fashioned",
                "build": "Combine Ingredients, stir and strain over ice",
                "ingredients": {
                    "ing1": {
                        "name": "Whiskey",
                        "amount": "2 oz"
                    },
                    "ing2": {
                        "name": "Angostura Bitters",
                        "amount": "2 dashes"
                    }   
                }
            }
        }
        const res = {json({cocktail}) {
            expect(cocktail.name).toEqual("Old Fashionedasdfas");
        }}

        await cocktail.createNewCocktail(req, res, () => {})
    })
})