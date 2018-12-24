import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class recipeDetailsComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
