import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelectedEmitter = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Kathi Roll', 'bread roll with vegetables',
            'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg'),
        new Recipe('Pizza', 'bread roll with vegetables',
            'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),

    ];

    getRecipes(): Recipe[] {
        return this.recipes.slice()
    }

}