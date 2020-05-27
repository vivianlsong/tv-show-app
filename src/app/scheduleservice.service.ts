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
    language: string;
  };
  network: {
    name: string;
  };
  image: {
    medium: string;
  };
  summary: string;
}

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  constructor(private httpClient: HttpClient) {}
  getSchedule(country: string, date: string): Observable<Ischedule[]> {
    return this.httpClient
      .get<IScheduleData[]>(
        `${environment.baseUrl}api.tvmaze.com/schedule?country=${country}&date=${date}`
      )
      .pipe(map((data) => this.transformToISchedule(data)));
  }
  transformToISchedule(data: IScheduleData[]): Ischedule[] {
    let result: Ischedule[] = [];
    for (let item of data) {
      let sched: Ischedule = {
        name: item?.name,
        language: item?.show?.language,
        runtime: item?.runtime,
        channel: item?.network?.name,
        description: item?.summary,
        image: item?.image?.medium,
      };
      result.push(sched);
    }
    return result;
  }
}
