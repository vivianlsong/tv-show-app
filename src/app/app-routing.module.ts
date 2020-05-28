import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvAppComponent } from './tv-app/tv-app.component';
import { PeoplesearchComponent } from './peoplesearch/peoplesearch.component';
import { ShowSearchComponent } from './show-search/show-search.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shows', component: TvAppComponent},
  {path: 'people', component: PeoplesearchComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
