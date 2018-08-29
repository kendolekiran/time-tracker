import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { Router } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import  { FooterModule } from '../components/footer/footer.module';
import  { HeaderModule } from '../components/header/header.module';

import { TimeTrackerApiService } from '@api';

import { TaskListComponent } from '../components/task-list/task-list.component';
import { LoginComponent } from '../pages/login/login.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule
  ],
  providers: [
    TimeTrackerApiService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  constructor(router: Router) {}
}
