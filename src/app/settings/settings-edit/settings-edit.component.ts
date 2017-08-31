import {
  Component,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';

import { Rate } from '../../rates.model';
import { SettingsListService } from '../settings-list.service';

@Component({
  selector: 'app-settings-edit',
  templateUrl: './settings-edit.component.html',
  styleUrls: ['./settings-edit.component.css']
})
export class SettingsEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: SettingsListService) { }

  ngOnInit() {
  }

  onAddRate() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newRate = new Rate(ingName, ingAmount);
    this.slService.addRate(newRate);
  }
}
