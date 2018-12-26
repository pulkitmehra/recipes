import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode: boolean;
  recipe: Recipe;
  recipeForm: FormGroup;

  constructor(private actRouter: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.actRouter.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        //undefined or number
        this.editMode = params['id'] != null;

        this.recipe = this.recipeService.findById(this.recipeId);
        console.log("Recipe is in edit mode " + this.editMode)
        this.initRecipeForm();
      }
    );
  }


  initRecipeForm() {

    let vName = '';
    let vImagePath = '';
    let vDesc = '';
    let vRecipeIngredients = new FormArray([]);

    if (this.editMode) {
      vName = this.recipe.name
      vDesc = this.recipe.description
      vImagePath = this.recipe.imagePath
      if (this.recipe.ingredients.length !== 0) {
        for (let ingredient of this.recipe.ingredients) {
          vRecipeIngredients.push(new FormGroup({
            'name': new FormControl(ingredient.name, Validators.required),
            'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }))
          console.log(ingredient)
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(vName, Validators.required),
      'description': new FormControl(vDesc, Validators.required),
      'imagePath': new FormControl(vImagePath, Validators.required),
      'ingredients': vRecipeIngredients
    });

  }

  onSubmit() {
    const recipeInPlay = new Recipe(
      -1,
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );

    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipe.id, recipeInPlay)
    } else {
      this.recipeService.addRecipe(recipeInPlay);
    }

    console.log(this.recipeForm);
    this.onRecipeCancel();
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onIngredientDelete(idx: number) {

  }

  onRecipeDelete() {
    if (this.editMode) {
      this.recipeService.deleteRecipe(this.recipe.id);
      this.router.navigate(['/recipes'])
    }
  }
  onRecipeCancel() {
    this.editMode = false;
    this.recipeId = null;
    this.recipe = null;
    this.router.navigate(['../'], { relativeTo: this.actRouter })
  }

}
