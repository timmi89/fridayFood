import {Component} from 'angular2/core';
import {Food} from './food.model';

//[(ngModel)] = creates two-way data binding, when we click on item we can both display and change info

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class="food-form">
    <h3>edit your food:  {{ food.name }} {{food.details}}       {{food.calories}}</h3>
      <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
      <input [(ngModel)]="food.details" class="col-sm-8 input-lg food-form"/>
      <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>
    </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}


 //child of FoodListComponent
