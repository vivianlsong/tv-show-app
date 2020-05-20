import { Component, OnInit } from '@angular/core';
import { Ischedule } from '../ischedule';
import { ScheduleService } from '../scheduleservice.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
 sched: Ischedule
  constructor(private scheduleservice: ScheduleService) { }

  ngOnInit(): void {
    this.scheduleservice
      .getSchedule('US', '2014-12-01')
      .subscribe((data) => {
        this.sched = data[0];}
        );
  }

}
