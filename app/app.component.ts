import { Component, EventEmitter } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';




// PARENT
//*ngFor =
// creates a "for each loop", directive duplicates html elements it is bound to in array,  (prints out each element once, as it loops through the array)(sidenote: if a div is named with *ngFor, it will loop through everything inside the div for the length of the array)

//output binding=
//(click)="kegWasSelected", ()=listen for output from here, "click" is what you're listening for, <h3> b/c that's where we're clicking, hence that's where the click event is emitting from.
// []=input, ()= output
// $event = arguement which says we recieve the actual event itself, not just an emitter, b/c it's coming from a custom event emitter
@Component({
 selector: 'my-app',
 directives: [KegListComponent],
 template: `
   <div class="container">
   <h1>track your beers</h1>
   <keg-list
   [kegList]="kegs"
   (onKegSelect)=kegWasSelected($event)>
   </keg-list>
   </div>
 `
})

export class AppComponent {
  public kegs : Keg[];
  constructor(){
    this.kegs = [
      new Keg("Lager ", "Rainier ", 2, .04),
      new Keg("Lager ", "Narragansett ", 3,   .045),
      new Keg("Lager ", "Schaefer ", 3,  .04),
      new Keg("Lager ", "National Bohemian ", 3,  .04),
      new Keg("Lager ", "Black Label ", 2, .04)
    ];
  }

//click event input (of EventEmitter)
//click triggers this method, which takes a parameter of clickedKeg, clickedKeg is of the type Keg(our model)
  kegWasSelected(clickedKeg: Keg): void {

  }
}
