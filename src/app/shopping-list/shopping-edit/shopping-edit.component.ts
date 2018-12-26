import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') formData: NgForm;

  editMode: boolean = false
  ingredientInEdit: Ingredient;

  private _editEventSubstn: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this._editEventSubstn = this.shoppingListService.ingredientEditEvent.subscribe((id: number) => {
      this.editMode = true;
      this.ingredientInEdit = this.shoppingListService.findIngredientById(id)
      this.formData.setValue({
        name: this.ingredientInEdit.name,
        amount: this.ingredientInEdit.amount
      });
    })
  }

  onIngredientAdded() {
    console.log(this.formData)
    const name = this.formData.value.name
    const amount = this.formData.value.amount;
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.ingredientInEdit.id, name, amount);
    } else {
      this.shoppingListService.addIngredient(name, amount)
    }
    this.onClear()
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.removeIngredientById(this.ingredientInEdit.id);
      this.onClear();
    }
  }

  onClear() {
    this.editMode = false;
    this.ingredientInEdit = null;
    this.formData.reset()
  }

  ngOnDestroy(): void {
    this._editEventSubstn.unsubscribe();
  }



  /*
  Approach to handle inputs via local reference using #

  @ViewChild('inputName') nameEle: ElementRef;
  @ViewChild('inputAmount') amountEle: ElementRef;
  onIngredientAdded() {
    const name = this.nameEle.nativeElement.value;
    const amount = this.amountEle.nativeElement.value;
    this.shoppingListService.addIngredient(name, amount)
    this.reset()
  }

  reset() {
    this.nameEle.nativeElement.value = ''
    this.amountEle.nativeElement.value = ''
  } */

}
