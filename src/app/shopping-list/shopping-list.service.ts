import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

export class ShoppingListService {
    ingredientEventEmitter = new Subject<Ingredient[]>();
    ingredientEditEvent = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient(0, 'Cumin', 12),
        new Ingredient(1, 'Meat', 8),
        new Ingredient(2, 'Apple', 5),
    ];

    getIngredients() {
        return this.ingredients.slice()
    }

    findIngredientById(id: number): Ingredient {
        return this.ingredients.find(i => i.id === id)
    }

    updateIngredient(id: number, name: string, amount: number) {
        const found = this.ingredients.findIndex(i => i.id === id);
        if (found != -1) {
            this.ingredients[found].name = name;
            this.ingredients[found].amount = amount;
        }
    }

    removeIngredientById(id: number) {
        const found = this.ingredients.findIndex(i => i.id === id)
        if (found != -1) {
            this.ingredients.splice(found, 1);
            this.ingredientEventEmitter.next(this.ingredients.slice())
        }
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