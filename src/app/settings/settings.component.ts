import { Component, OnInit } from '@angular/core';
import { SettingsListService } from './settings-list.service';
import { Rate } from '../rates.model';
import {Injectable, Pipe} from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'order-by' })
export class OrderByPipe {
  transform(array, args) {
    return _.sortBy(array, args);
  }
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  rates: Rate[];

  constructor(private slService: SettingsListService) { }

  ngOnInit() {
    this.rates = this.slService.getRates();
    this.slService.rateChanged
      .subscribe(
        (ingredients: Rate[]) => {
          this.rates = ingredients;
        }
      )
  }

}
