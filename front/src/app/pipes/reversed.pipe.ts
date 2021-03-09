import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversed'
})
export class ReversedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    let valueToString: string;
    let valueReturned: string = "";

    valueToString = value + "";

    for( let i: number = valueToString.length -1 ; i >= 0; i--){
      valueReturned += valueToString[i];
    }

    return valueReturned;
  }

}
