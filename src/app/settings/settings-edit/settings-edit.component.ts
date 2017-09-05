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
  @ViewChild('feeInput') feeInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: SettingsListService) { }

  ngOnInit() {
  }

  onAddRate() {
    const ingFee = this.feeInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    if ((ingFee) && (ingAmount)){
      const newRate = new Rate(ingFee, ingAmount);
      this.slService.addRate(newRate);
    }
  }
}
