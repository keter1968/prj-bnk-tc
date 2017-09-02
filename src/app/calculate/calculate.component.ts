import { Component, OnInit } from '@angular/core';
import { Rate } from '../rates.model';
import { SettingsListService } from '../settings/settings-list.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor(private slService: SettingsListService) { }
    private rates: Rate[] = [];

  ngOnInit() {
    this.rates = this.slService.getRates();
  }

}
