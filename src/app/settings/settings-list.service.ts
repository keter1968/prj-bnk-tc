import { Rate } from '../rates.model';
import { EventEmitter } from '@angular/core';

export class SettingsListService {
    rateChanged = new EventEmitter<Rate[]>();
    private rates: Rate[] = [];

  getRates() {
    return this.rates.slice();
  }

    addRate(rate: Rate) {
        this.rates.push(rate);
        this.rateChanged.emit(this.rates.slice());
      }
}
