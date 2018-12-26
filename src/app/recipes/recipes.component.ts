import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    /* 
    Not used but there for reference
    this.recipeService.recipeSelectedEmitter.subscribe(
      (recipe: Recipe) => {
        console.log("Recipe recieved " + JSON.stringify(recipe))
        this.selectedRecipe = recipe;
      }
    ); */
  }

}
