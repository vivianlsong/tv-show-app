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
import { ShowSearchComponent } from './show-search/show-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'shows', component: TvAppComponent},
  {path: 'people', component: PeoplesearchComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PeoplesearchComponent,
    ScheduleComponent,
    TvAppComponent,
    ShowSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    ],
  providers: [PeopleserviceService, ScheduleService, TvService],
  bootstrap: [AppComponent]
})
export class AppModule { }
