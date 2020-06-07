import { IShowService } from './ishow-service';
import { ITvapp } from './itvapp';
import { Observable, of } from 'rxjs';

export class TvServiceFake implements IShowService {
  private fakeTvShow: ITvapp = {
    image: '',
    name: 'Friends',
    summary: 'Friends during the 90s',
    runtime: 60,
    genres: 'comedy',
    rating: 9.0,
    schedule: 'Friday',
    time: 131642,
    episodes: 1,
    season: 1
  }

  public getTvapp(search: string): Observable<ITvapp> {
    return of(this.fakeTvShow);
  }
}
