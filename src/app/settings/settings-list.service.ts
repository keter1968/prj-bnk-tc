import { Rate } from '../rates.model';
import { EventEmitter } from '@angular/core';

export class SettingsListService {
    rateChanged = new EventEmitter<Rate[]>();
    private rate: Rate[] ;


    addRate(rates: Rate) {
        this.rate.push(rates);
        this.rateChanged.emit(this.rate.slice());
      }
    
}
