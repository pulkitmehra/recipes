import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];

  _recipeChangeEventSubstn: Subscription;

  constructor(private recipeService: RecipeService, private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes()
    this._recipeChangeEventSubstn = this.recipeService.recipesChangeEvent.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    )
  }

  onNavigateToRoute() {
    this.router.navigate(['new'], { relativeTo: this.activateRoute })
  }

  ngOnDestroy(): void {
    this._recipeChangeEventSubstn.unsubscribe();
  }
}
