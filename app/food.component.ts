import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>{{food.name}}</h3>

    `
  // <button (click)="minusFood(food)">no info!</button>
})
export class FoodComponent {
  public food: Food;

}

// <br>{{ " you should know that: " + food.details }}<br>{{ " calories: " + food.calories }}
 //parent is:
 //FoodListComponent
//
