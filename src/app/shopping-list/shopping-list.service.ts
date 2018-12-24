import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientEventEmitter = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Cumin', 12),
        new Ingredient('Meat', 8),
        new Ingredient('Apple', 5),
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(name: string, amount: number) {
        const ingredient = new Ingredient(name, amount)
        this.ingredients.push(ingredient)
        this.ingredientEventEmitter.emit(this.getIngredients())
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientEventEmitter.emit(this.getIngredients())
    }
}