import { Component, EventEmitter} from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {LowPipe} from './low.pipe';


// CHILD component based on parent component.
//selector: html element which will be used in parent template so it knows where to load the components kegList array
//template: replaces loop in parent, *ngFor uses a forEach loop to display beer info, name changes from keg(in parent) to currentKeg, kegWasSelected method (in parent) changes to kegClicked method
//*ngIf used like *ngFor, works as an attribute on an HTML tag. if expression in "" quotes is true (or not false) than HTML tag is shown, if false then tag is hidden
//inputs: saying "when i grow up, i'll have a property called kegList and it will be an array of info given to me from my parent", []=input
//custom EventEmitter = onKegSelect

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [LowPipe],
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="low">Show Low</option>
    <option value="notLow" selected="selected">Show Full(ish) Kegs</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | low:filterLow"
    [class.cheap]="currentKeg.price <= 5"
    [class.expensive]="currentKeg.price >= 5"
    [class.strong]= "currentKeg.alcohol >= 6"
    (click)="kegClicked(currentKeg)"
    [class.selected]= "currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg"
  [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow: string = "notLow";
  constructor(){
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    this.kegList.push(newKeg);
  }
  onChange(filterOption){
    this.filterLow = filterOption;
  }

}
