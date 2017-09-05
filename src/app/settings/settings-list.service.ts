import { Rate } from '../rates.model';
import { EventEmitter } from '@angular/core';

export class SettingsListService {
    rateChanged = new EventEmitter<Rate[]>();
    private rates: Rate[] = [];
    private exist:  boolean;
    
  getRates() {
    return this.rates.slice();
  }

  addRate(rate: Rate) {
      if (!this.findRate(rate)) {
        this.rates.push(rate);
        this.rateChanged.emit(this.rates.slice());
      }
    }

  findRate(rate: Rate) {
    var obj = this.rates.find(f => f.fee === rate.fee)
    return obj;
  }
}
