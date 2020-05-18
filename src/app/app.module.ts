import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeoplesearchComponent } from './peoplesearch/peoplesearch.component';
import { HttpClientModule} from '@angular/common/http';
import { PeopleserviceService } from './peopleservice.service';
@NgModule({
  declarations: [
    AppComponent,
    PeoplesearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [PeopleserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
