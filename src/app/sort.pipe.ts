import {Injectable, Pipe, PipeTransform } from '@angular/core';
import { Rate } from './rates.model';

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: Rate[], args: any): Rate[]{
    if(!arr){ return; }
    return arr.sort((a, b) => {
      if (a.fee > b.fee || a.fee < b.fee) {
        return 1;
      }
      if (a.fee < b.fee || a.fee > b.fee) {
        return -1;
      }
      return 0;
    });
  }
}
