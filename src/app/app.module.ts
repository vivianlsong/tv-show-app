import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeoplesearchComponent } from './peoplesearch/peoplesearch.component';
import { PeopleserviceService } from './peopleservice.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { ScheduleService } from './scheduleservice.service';
import { TvAppComponent } from './tv-app/tv-app.component';
import { TvService } from './tv.service';

@NgModule({
  declarations: [
    AppComponent,
    PeoplesearchComponent,
    ScheduleComponent,
    TvAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PeopleserviceService, ScheduleService, TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
