import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Kathi Roll', 'bread roll with vegetables',
      'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg'),
    new Recipe('Pizza', 'bread roll with vegetables',
      'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),

  ];

  onSelectedRecipe(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
