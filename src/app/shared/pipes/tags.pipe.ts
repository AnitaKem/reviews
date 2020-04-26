import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models';

@Pipe({
  name: 'tags',
  pure: true
})
export class TagsPipe implements PipeTransform {

  transform(tags: Array<string>, ...args: unknown[]): string {
    return tags.join(', ');
  }

}
