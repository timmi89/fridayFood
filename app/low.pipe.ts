import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "low",
  pure: false

})

export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredLowState = args[0];
    if(desiredLowState === "low") {
      return input.filter((keg) => {
        if(keg.pints < 10) {
         return !keg.low;
       }
      });
    } else if (desiredLowState === "notLow") {
      return input.filter((keg) => {
        if(keg.pints > 9){
          return !keg.low;
        }
      });
    } else {
      return input;
    }
  }
}
