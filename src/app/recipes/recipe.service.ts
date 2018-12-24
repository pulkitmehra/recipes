import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    recipeSelectedEmitter = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Kathi Roll', 'bread roll with vegetables',
            'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg',
            [
                new Ingredient("Break", 2),
                new Ingredient("Chicken", 250),
                new Ingredient("Egg", 2)
            ]),
        new Recipe('Pizza', 'bread roll with vegetables',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            [
                new Ingredient('Bread', 1),
                new Ingredient('Red Sause', 1),
                new Ingredient('Meat', 100),
            ]),
    ]


    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes(): Recipe[] {
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients.slice())
    }


}