import {Component} from 'angular2/core';
import {Food} from './food.model';

@Component({
  selector: 'display-food-details',
  inputs: ['fakeFood'],
  template:
  `
  <div class="display-food-details">
    <p>Details: {{fakeFood.details}}</p>
    <p>Calories: {{fakeFood.calories}}</p>
  </div>
  `
})

export class DisplayFoodDetailsComponent {
  public fakeFood: Food;
}
