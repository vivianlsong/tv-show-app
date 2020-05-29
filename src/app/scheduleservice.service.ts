import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ischedule } from './ischedule';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface IScheduleData {
  name: string;
  runtime: number;
  show: {
    name: string;
  };
  network: {
    name: string;
  };
  image: {
    medium: string;
  };
  summary: string;
  airtime: string;
  season: number;
  number: number;
}

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private httpClient: HttpClient) {}
  getSchedule(country: string, date: string): Observable<Ischedule[]> {
    return this.httpClient
      .get<IScheduleData[]>(
        `${environment.baseUrl}api.tvmaze.com/schedule`
      )
      .pipe(map((data) => this.transformToISchedule(data)));
  }
  transformToISchedule(data: IScheduleData[]): Ischedule[] {
    let result: Ischedule[] = [];
    for (let item of data) {
      let sched: Ischedule = {
        show_name: item?.show?.name,
        runtime: item?.runtime,
        ep_name: item?.name,
        description: item?.summary,
        image: item?.image?.medium,
        time: item?.airtime,
        season: item?.season,
        ep_number: item?.number
      };
      result.push(sched);
    }
    return result;
  }
}
