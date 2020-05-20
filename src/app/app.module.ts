import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { TvshowService } from './tvshow.service';
import { HttpClientModule } from '@angular/common/http';
import { PeoplesearchComponent } from './peoplesearch/peoplesearch.component';
import { PeopleserviceService } from './peopleservice.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent
    PeoplesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TvshowService, PeopleserviceService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
