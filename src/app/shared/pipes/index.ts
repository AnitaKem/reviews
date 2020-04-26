import { AddressPipe } from './address.pipe';
import { TagsPipe } from './tags.pipe';
import { FirstPlacePhotoPipe } from './first-place-photo.pipe';
import { ServicesPipe } from './services.pipe';

export const pipes: Array<any> = [
  AddressPipe,
  TagsPipe,
  FirstPlacePhotoPipe,
  ServicesPipe,
];

export * from './address.pipe';
export * from './tags.pipe';
export * from './first-place-photo.pipe';
export * from './services.pipe';

