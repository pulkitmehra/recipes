import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { recipesComponent as RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeLandingComponent } from './recipes/recipe-landing/recipe-landing.component';
import { recipeDetailsComponent as RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent,
    children: [
      { path: '', component: RecipeLandingComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
