import { Component, EventEmitter} from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import {LowPipe} from './low.pipe';


// CHILD component based on parent component.(child of AppComponent)
//selector: html element which will be used in parent template to load component and so paremt knows where to load the components foodList array
//template: replaces loop in parent, *ngFor uses a forEach loop to display food info, name changes from food(in parent) to currentFood, foodWasSelected method (in parent) changes to kegClicked method
//*ngIf used like *ngFor, works as an attribute on an HTML tag. if expression in "" quotes is true (or not false) than HTML tag is shown, if false then tag is hidden
//inputs: saying "when i grow up, i'll have a property called foodList and it will be an array of info given to me from my parent", []=input
//custom EventEmitter = onFoodSelect
//[class.selected]= "currentFood === selectedFood" tells angular to add/remove .selected class based on whether the current task displayed by the *ngFor loop is equal to selectedFood or not
//parent of:
// FoodComponent

@Component({
  selector: 'food-list',
  inputs: ['foodList'],
  outputs: ['onFoodSelect'],
  directives: [FoodComponent, EditFoodDetailsComponent, NewFoodComponent],
  pipes: [LowPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="low">Show Low Calorie</option>
    <option value="notLow" selected="selected">Show Higher Calorie</option>
  </select>
  <food-display *ngFor="#currentFood of foodList | low:filterLow:selectedFood"
    (click)="foodClicked(currentFood)"
    [class.selected]= "currentFood === selectedFood"
    [food]="currentFood">
  </food-display>

  <edit-food-details *ngIf="selectedFood"
    [food]="selectedFood">
  </edit-food-details>
  <new-food (onSubmitNewFood)="createFood($event)"></new-food>
  `
})

export class FoodListComponent {
  public foodList: Food[];
  public onFoodSelect: EventEmitter<Food>;
  public selectedFood: Food;
  public filterLow: string = "notLow";

  constructor(){
    this.onFoodSelect = new EventEmitter();
  }
  foodClicked(clickedFood: Food): void {
    console.log(clickedFood);
    this.selectedFood = clickedFood;
    this.onFoodSelect.emit(clickedFood);
  }
  createFood(newFood: Food): void {
    this.foodList.push(newFood);
  }
  onChange(filterOption){
    this.filterLow = filterOption;
  }
}
