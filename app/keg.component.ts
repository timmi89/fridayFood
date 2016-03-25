import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component({
    selector: 'keg-display',
    inputs: ['keg'],
  template: `
    <h3>{{ keg.brand + " "}}<span class="lager">{{ keg.name }}</span>{{ " $" + keg.price }} {{ keg.alcohol + "%abv" }} {{ "you have " + keg.pints + " pints left."}}</h3>
    <button (click)="minusPint(keg)">pour a pint</button>

  `
})
export class KegComponent {
  public keg: Keg;

  minusPint(selectedKeg: Keg){
    this.keg.pints -= 1;
  }
}
