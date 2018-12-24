import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class recipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() selectedRecipeEvent = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log("Recipe Item selected " + recipe)
    this.selectedRecipeEvent.emit()
  }
}
