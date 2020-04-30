import { SearchService } from './search.service';
import { SearchResolverService } from './search-resolver.service';

export const services: Array<any> = [
  SearchService,
  SearchResolverService,
];

export * from './search.service';
export * from './search-resolver.service';
