import { Component, OnInit, Input } from '@angular/core';
import { ITvappcast } from '../itvapp';


@Component({
  selector: 'app-tv-app',
  templateUrl: './tv-app.component.html',
  styleUrls: ['./tv-app.component.css']
})
export class TvAppComponent implements OnInit {
  @Input() current: ITvappcast;
  ngOnInit(): void{}
}

