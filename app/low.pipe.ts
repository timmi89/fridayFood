import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "low",
  pure: false

})

export class LowPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredLowState = args[0];
    if(desiredLowState === "low") {
      return input.filter((food) => {
        if(food.calories < 300) {
         return !food.low;
       }
      });
    } else if (desiredLowState === "notLow") {
      return input.filter((food) => {
        if(food.calories > 300){
          return !food.low;
        }
      });
    } else {
      return input;
    }
  }
}
