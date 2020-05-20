import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IShow } from './ishow';
import {map} from 'rxjs/operators';

interface IShowData {
  name: string,
  genres: string,
  summary: string,
  image: {
    medium: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  constructor(private httpClient: HttpClient) { }

  getShow(name: string){
    return this.httpClient.get<IShowData>(
      `${environment.baseUrl}api.tvmaze.com/singlesearch/shows?q=${name}&appid=${environment.appId}`).pipe(
        map(data => this.transformToIShow(data))
        )
  }

  transformToIShow(data: IShowData) : IShow {
    return {
      title: data.name,
      genre: data.genres,
      description: data.summary,
      image: data.image.medium
    }
  }
}
