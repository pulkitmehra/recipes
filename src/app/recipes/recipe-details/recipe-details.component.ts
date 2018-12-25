import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class recipeDetailsComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  private paramsSubtn: Subscription

  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.paramsSubtn = this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.findById(+params['id'])
      }
    )
  }

  onAddIngredientsToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onNavigateToRoute() {
    this.router.navigate(["edit"], { relativeTo: this.route })
    //this.router.navigate(['../', this.recipe.id, 'edit'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.paramsSubtn.unsubscribe();
  }

}
