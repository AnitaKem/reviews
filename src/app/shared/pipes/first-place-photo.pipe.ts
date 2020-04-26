import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../models';

@Pipe({
  name: 'firstplacephoto',
  pure: true
})
export class FirstPlacePhotoPipe implements PipeTransform {

  transform(place: Place, ...args: unknown[]): string {
    if (!Object.keys(place.apiInfo)) return null;

    const first = Object.values(place.apiInfo)[0];
    return first.photo;
  }

}
