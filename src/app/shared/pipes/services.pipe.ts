import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../models';

@Pipe({
  name: 'services',
  pure: true
})
export class ServicesPipe implements PipeTransform {

  transform(place: Place, ...args: unknown[]): string {
    if (!Object.keys(place.apiInfo)) return '';

    return Object.keys(place.apiInfo).join(', ');
  }
}
