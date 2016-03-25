import { Component } from 'angular2/core';
import { Food } from './food.model';

@Component({
    selector: 'food-display',
    inputs: ['food'],
  template: `
    <h3>{{ food.name + " "}}{{ food.details }} {{ food.calories }} </h3>
   <button (click)="minusPint(keg)">pour a pint</button>

  `
})
export class FoodComponent {
  public food: Food;

  minusPint(selectedKeg: Keg){
    this.keg.pints -= 1;
  }
}
{{ "you have " + keg.pints + " pints left."}}