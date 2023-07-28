
import { Router } from 'express'
import { body, validationResult } from 'express-validator'
import { handleInputErrors } from './modules/middleware';
import { createNewCocktail, deleteCocktail, getCocktails, getOneCocktail, updateCocktail } from './handlers/cocktail';


const router = Router();

/* 
  * Cocktails
  */

router.get('/cocktail', getCocktails); 
router.get('/cocktail/:id', getOneCocktail);

router.put('/cocktail/:id', body('name').isString(), handleInputErrors, updateCocktail);

router.post('/cocktail', body('name').isString(), handleInputErrors, createNewCocktail);

router.delete('/cocktail/:id', deleteCocktail);

/**
 * 
 * 
 * Cocktail feed
 * 
 */

router.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: 'in a router handler'})
}) 


export default router;




