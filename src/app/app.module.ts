import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CalculateComponent } from './calculate/calculate.component';
import { SettingsComponent } from './settings/settings.component';
import { AppRoutingModule } from "./app-routing-module";

@NgModule({
  declarations: [
    AppComponent,
    CalculateComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
