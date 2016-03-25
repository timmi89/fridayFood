import { Component, EventEmitter } from 'angular2/core';
import { Food } from "./food.model";

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
  <div class="food-form">
  <h3>make a new keg</h3>
  <input placeholder="food name" class="col-sm-8 input-lg" #newName>
    <input placeholder="details" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="calories" class="col-sm-8 input-lg" #newPrice>

  <button (click)="addFood(newName, newDetails, newCalories)">Add</button>
  </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<Food>;
  constructor(){
    this.onSubmitNewFood = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newDetails: HTMLInputElement, newCalories: HTMLInputElement){

    var newFood = new Food(newName.value, newDetails.value, parseInt(newCalories.value));
    this.onSubmitNewFood.emit(newFood);
    newName.value = "";
    newDetails.value = "";
    newCalories.value = "";
  }
}
