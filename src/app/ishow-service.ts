import {Observable} from 'rxjs';
import {ITvapp} from './itvapp'
import {Ipeoplesearch} from './ipeoplesearch'

export interface IShowService {
  getTvapp(search: string): Observable<ITvapp>
  getPeopleSearch(search: string): Observable<Ipeoplesearch>
}
