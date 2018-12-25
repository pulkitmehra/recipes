import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipeId: number;
  editMode: boolean;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        //undefined or number
        this.editMode = params['id'] != null;
        console.log("Recipe is in edit mode " + this.editMode)
      }
    );
  }

}
