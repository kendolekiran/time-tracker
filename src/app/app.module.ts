import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import  { FooterModule } from '../components/footer/footer.module';
import  { HeaderModule } from '../components/header/header.module';

import { TimeTrackerApiService } from '@api';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    FooterModule
  ],
  providers: [
    TimeTrackerApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
