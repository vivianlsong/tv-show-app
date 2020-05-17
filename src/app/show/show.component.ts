import { Component, OnInit } from '@angular/core';
import { IShow } from '../ishow';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  search: IShow;
  constructor(private tvshowService: TvshowService) {    }

  ngOnInit(): void {
    this.tvshowService.getShow('Adventure Time').subscribe(data => this.search = data)
  }

}
