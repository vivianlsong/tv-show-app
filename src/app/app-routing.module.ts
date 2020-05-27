import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvAppComponent } from './tv-app/tv-app.component';
import { PeoplesearchComponent } from './peoplesearch/peoplesearch.component';
import { ShowSearchComponent } from './show-search/show-search.component';

const routes: Routes = [
  {path: 'home', component: ShowSearchComponent},
    {path: 'shows', component: TvAppComponent},
  {path: 'people', component: PeoplesearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
