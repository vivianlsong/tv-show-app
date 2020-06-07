import { Component, OnInit } from '@angular/core';
import { TvService } from '../tv.service';
import { ITvapp, ITvappcast} from '../itvapp';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tvshow: ITvappcast;

  constructor(private tvService: TvService) { }
  doSearch(searchValue) {
    const userInput = searchValue;
    this.tvService.getTvappcast(userInput).subscribe(data => this.tvshow = data);
  }
  ngOnInit(): void {
  }
}
