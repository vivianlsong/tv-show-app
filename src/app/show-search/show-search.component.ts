import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TvService} from '../tv.service';
//import {PeopleserviceService} from '../peopleservice.service';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  search = new FormControl();
  constructor(
    private TvService: TvService,
    //private PeopleserviceService: PeopleserviceService
    ) { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe((searchValue: string) => {
      if (searchValue) {
        const userInput = searchValue.split(',').map(s => s.trim())
        this.TvService.getTvapp(userInput[0]).subscribe(data => console.log(data));
      }
    })
  }

}
