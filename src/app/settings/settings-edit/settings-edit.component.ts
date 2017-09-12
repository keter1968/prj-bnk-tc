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

  // isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
  //   return typeof obj === "undefined" || obj === null;
  // }

  // isNullOrUndefined<T>(obj?: T | null | undefined): boolean {
  //   // null == undefined so this is true if obj = null or obj = undefined
  //   return typeof obj == "undefined" || obj == null;
  // }

  // onAddRate() {
  //   const ingFee = this.feeInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   if ((!this.isNullOrUndefined(ingFee)) && (!this.isNullOrUndefined(ingAmount))){
  //     const newRate = new Rate(ingFee, ingAmount);
  //     this.slService.addRate(newRate);
  //   }
  // }

  onAddRate() {
    const ingFee = this.feeInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    if ((ingFee) && (ingAmount)){
      const newRate = new Rate(ingFee, ingAmount);
      this.slService.addRate(newRate);
    }
  }
}
