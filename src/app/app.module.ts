import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import 'flatpickr/dist/flatpickr.css';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [CalendarComponent]
})
export class AppModule { }
