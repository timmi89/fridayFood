import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>{{ "i ate some: " + food.name}}<br>{{ " you should know that: " + food.details }} <br>{{ " calories: " + food.calories }} </h3>
    `
    // <button (click)="minusPint(keg)">pour a pint</button> (was inside templat, is outside so it can be commented out)
})
export class FoodComponent {
  public food: Food;

  // minusPint(selectedKeg: Keg){
  //   this.keg.pints -= 1;
  // }
}
// {{ "you have " + keg.pints + " pints left."}}

 //parent is:
 //FoodListComponent
