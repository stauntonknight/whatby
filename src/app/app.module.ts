import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent}  from './app.component';
import  ResultModule  from './results/result.module';


@NgModule({
  imports:      [ BrowserModule, ResultModule, ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
