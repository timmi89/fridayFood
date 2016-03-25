import { Component, EventEmitter } from 'angular2/core';
import { Keg } from "./keg.model";

@Component({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
  <h3>make a new keg</h3>
  <input placeholder="beer name" class="col-sm-8 input-lg" #newName>
    <input placeholder="beer brand" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="price" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="abv" class="col-sm-8 input-lg" #newAlcohol>
  <button (click)="addKeg(newName, newBrand, newPrice, newAlcohol)">Add</button>
  </div>
  `
})
export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<Keg>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(newName: HTMLInputElement, newBrand: HTMLInputElement, newPrice: HTMLInputElement, newAlcohol: HTMLInputElement){

    var newKeg = new Keg(newName.value, newBrand.value, parseInt(newPrice.value), parseFloat(newAlcohol.value));
    this.onSubmitNewKeg.emit(newKeg);
    newName.value = "";
    newBrand.value = "";
    newPrice.value = "";
    newAlcohol.value = "";
  }
}
