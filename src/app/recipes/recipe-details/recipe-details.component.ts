import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class recipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

}
