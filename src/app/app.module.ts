import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from "./app-routing-module";
import { SettingsEditComponent } from './settings/settings-edit/settings-edit.component';
import { SettingsListService } from './settings/settings-list.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculateComponent,
    SettingsComponent,
    SettingsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SettingsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
