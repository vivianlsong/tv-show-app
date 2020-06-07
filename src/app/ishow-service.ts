import {Observable} from 'rxjs';
import {ITvapp} from './itvapp'

export interface IShowService {
  getTvapp(search: string): Observable<ITvapp>
}
