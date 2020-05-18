import { Component, OnInit } from '@angular/core';
import { Ipeoplesearch } from '../ipeoplesearch';
import { PeopleserviceService } from '../peopleservice.service';

@Component({
  selector: 'app-peoplesearch',
  templateUrl: './peoplesearch.component.html',
  styleUrls: ['./peoplesearch.component.css'],
})
export class PeoplesearchComponent implements OnInit {
  people: Ipeoplesearch;
  constructor(private peopleservice: PeopleserviceService) {
  }

  ngOnInit(): void {
    this.peopleservice
      .getPeopleSearch('Lauren Weedman')
      .subscribe((data) =>
      {
      
       this.people = data[0];}
      );
  }
}
