import { Component, EventEmitter} from 'angular2/core';
import { FoodComponent } from './food.component';
import { Food } from './food.model';
import { EditFoodDetailsComponent } from './edit-food-details.component';
import { NewFoodComponent } from './new-food.component';
import {LowPipe} from './low.pipe';
// import {ShowFoodDetailsComponent} from './show-food-details.component';


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
