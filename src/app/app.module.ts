import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import  { FooterModule } from '../components/footer/footer.module';
import  { HeaderModule } from '../components/header/header.module';
import  { TodoWidgetModule } from '../components/todo-widget/todo-widget.module';
import { MyInputComponent } from '../components/my-input/my-input.component';


@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FooterModule,
    TodoWidgetModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
