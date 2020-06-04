import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { ITvapp} from '../itvapp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tvshow: ITvapp;

  constructor(private TvService: TvService) { }
  doSearch(searchValue) {
    const userInput = searchValue.split(' ').map(s => s.trim())
    this.TvService.getTvapp(userInput[0]).subscribe(data => this.tvshow = data);
  }
  ngOnInit(): void {
  }

}
