import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Place } from '../models';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class SearchResolverService implements Resolve<Array<Place>> {

  constructor(private searchService: SearchService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<Place>> {
    const city = route.queryParamMap.get('city');
    const text = route.queryParamMap.get('text');
    return this.searchService.getPlaces(text, city);
  }
}
