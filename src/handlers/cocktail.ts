import prisma from '../db'

//get all cocktails from a specific user
export const getCocktails = async (req, res) => {

    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id,
        },
        include: {
            cocktails: true,
        }
    })
    res.json( { data: user.cocktails} )
}

//get a singular cocktail from a specific user
export const getOneCocktail = async (req, res) => { 
    const id = req.params.id;

    const cocktail = await prisma.cocktail.findFirst({
        where: {
            id: id,
            belongsToId: req.user.id,
        }
    })
    res.json( { data: cocktail })
}

//create a new cocktail

export const createNewCocktail = async (req, res, next) => { 
    try {
        const cocktail = await prisma.cocktail.create({
            data: {
                name: req.body.name,
                build: req.body.build,
                asset: req.body.asset,
                ingredients: req.body.ingredients,
                belongsToId: req.user.id,
            }
        })
        res.json( { data: cocktail })
    } catch (err) {
        next(err)
    }
}

export const updateCocktail = async (req, res) => { 
    const updatedCocktail = await prisma.cocktail.update({
        where: {
            id: req.params.id,
            belongsToId: req.user.id,
        },
        data: {
            name: req.body.name,
            build: req.body.build,
            asset: req.body.asset,
        }
    })
    res.json( { data: updatedCocktail })
}

export const deleteCocktail = async (req, res) => { 
    const deleted = await prisma.cocktail.delete({
        where: {
            id: req.params.id,
            id_belongsToId: {
                id: req.params.id,
                belongsToId: req.user.id,
            }
        }
    })

    res.json( { data: deleted })
}