import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientEventEmitter = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient(0, 'Cumin', 12),
        new Ingredient(1, 'Meat', 8),
        new Ingredient(2, 'Apple', 5),
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    addIngredient(name: string, amount: number) {
        const id = Math.floor((Math.random() * 100) + 1);
        const ingredient = new Ingredient(id, name, amount)
        this.ingredients.push(ingredient)
        this.ingredientEventEmitter.next(this.getIngredients())
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientEventEmitter.next(this.getIngredients())
    }
}