import { Component, EventEmitter } from 'angular2/core';
import { FoodListComponent } from './food-list.component';
import { Food } from './food.model';




// PARENT
//*ngFor =
// creates a "for each loop", directive duplicates html elements it is bound to in array,  (prints out each element once, as it loops through the array)(sidenote: if a div is named with *ngFor, it will loop through everything inside the div for the length of the array)

//output binding=
//(click)="foodWasSelected", ()=listen for output from here, "click" is what you're listening for, <h3> b/c that's where we're clicking, hence that's where the click event is emitting from.
// []=input, ()= output
// $event = arguement which says we recieve the actual event itself, not just an emitter, b/c it's coming from a custom event emitter(onFoodSelect)
//food-list is connecting its output onFoodSelect to parent method foodWasSelected
//children of app.component=
//FoodListComponent
@Component({
 selector: 'my-app',
 directives: [FoodListComponent],
 template: `
   <div class="container">
   <h1>what have you been eating?</h1>
   <food-list
   [foodList]="foods"
   (onFoodSelect)=foodWasSelected($event)>
   </food-list>
   </div>
 `
})

export class AppComponent {
  public foods : Food[];
  constructor(){
    this.foods = [
      new Food("pizza ", "lots of spinach, no beer ", 600),
      new Food("red lentil soup ", "ate half the pot ", 299),
      new Food("falafel gyro ", "absolutely put fries in it ", 500),
      new Food("pasta and vegetables ", "half pasta, half veggies ", 350),
      new Food("greens and tofu salad ", "no bread with salad, sesame oil dressing ", 275)
    ];
  }

//click event input (of EventEmitter)
//click triggers this method, which takes a parameter of clickedKeg, clickedKeg is of the type Keg(our model)
  foodWasSelected(clickedFood: Food): void {

  }
}
