import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ipeoplesearch } from './ipeoplesearch';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

interface IActorData {
  name: string;
  birthday: string;
  country: {
    code: string;
  };
  gender: string;
  image: {
    medium: string;
  };
}

interface IActorSearchResult {
  score: number;
  person: IActorData;
}

@Injectable({
  providedIn: 'root',
})
export class PeopleserviceService {
  constructor(private httpClient: HttpClient) {}

  getPeopleSearch(search: string): Observable<Ipeoplesearch[]> {
    let uriParams = '';
    if (typeof search === 'string') {
      uriParams = `q=${search}`
    }

    return this.httpClient
      .get<IActorSearchResult[]>(
        `${environment.baseUrl}api.tvmaze.com/search/people?${uriParams}`
      )
      .pipe(map((data) => this.transformToIpeoplesearch(data)));
  }

  transformToIpeoplesearch(data: IActorSearchResult[]): Ipeoplesearch[] {
    let result: Ipeoplesearch[] = [];
    for (let item of data) {
      let person: Ipeoplesearch = {
        name: item.person.name,
        birthday: item.person.birthday,
        country: item.person.country.code,
        gender: item.person.gender,
        image: item.person.image.medium
      };
      result.push(person);
    }
    return result;
  }
}
