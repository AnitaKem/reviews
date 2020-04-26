import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models';

@Pipe({
  name: 'address',
  pure: true
})
export class AddressPipe implements PipeTransform {

  transform(value: Address, ...args: unknown[]): string {
    return `${value.city}, ${value.street} ${value.house}`;
  }

}
