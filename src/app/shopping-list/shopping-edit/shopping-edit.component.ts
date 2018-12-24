import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') nameEle: ElementRef;
  @ViewChild('inputAmount') amountEle: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onIngredientAdded() {
    const name = this.nameEle.nativeElement.value;
    const amount = this.amountEle.nativeElement.value;
    this.shoppingListService.addIngredient(name, amount)
    this.reset()
  }

  reset() {
    this.nameEle.nativeElement.value = ''
    this.amountEle.nativeElement.value = ''
  }

}
