import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    //this is not used but its there for reference
    //recipeSelectedEmitter = new EventEmitter<Recipe>();
    recipesChangeEvent = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(0, 'Kathi Roll', 'bread roll with vegetables',
            'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg',
            [
                new Ingredient(111, "Break", 2),
                new Ingredient(125, "Chicken", 250),
                new Ingredient(129, "Egg", 2)
            ]),
        new Recipe(1, 'Pizza', 'bread roll with vegetables',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg',
            [
                new Ingredient(310, 'Bread', 1),
                new Ingredient(329, 'Red Sause', 1),
                new Ingredient(376, 'Meat', 100),
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

    findById(id: number): Recipe {
        return this.recipes.slice().find(r => r.id === id)
    }

    addRecipe(recipe: Recipe) {
        const id = Math.floor((Math.random() * 1000) + 1);
        recipe.id = id;
        this.recipes.push(recipe)
        this.recipesChangeEvent.next(this.recipes.slice())
    }

    updateRecipe(id: number, recipe: Recipe) {
        recipe.id = id;
        const idxFound = this.recipes.findIndex(r => r.id === id)
        if (idxFound != -1) {
            this.recipes[idxFound] = recipe;
        }
        this.recipesChangeEvent.next(this.recipes.slice())
    }

    deleteRecipe(id: number) {
        const idxFound = this.recipes.findIndex(r => r.id === id)
        if (idxFound != -1) {
            this.recipes.splice(idxFound, 1);
        }
        this.recipesChangeEvent.next(this.recipes.slice())
    }


}