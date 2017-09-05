import { Component, OnInit } from '@angular/core';
import { SettingsListService } from './settings-list.service';
import { Rate } from '../rates.model';
import { SortPipe } from '../sort.pipe';
import { Pipe, PipeTransform } from '@angular/core';

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
        (rate: Rate[]) => {
          this.rates = rate;
        }
      )
  }
}
