import {Injectable, Pipe, PipeTransform } from '@angular/core';
import { Rate } from './rates.model';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: Rate[], args: any): Rate[]{
    if(!arr){ return; }
    arr.sort((a: any, b: any) => {
      if (a.fee < b.fee) {
        return -1;
      } else if (a.fee > b.fee) {
        return 1;
      } else {
        return 0;
      }
    });
    return arr;
  }
}
