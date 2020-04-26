import { Address } from './address.model';
import { ApiInfoMap } from './api-info-map.model';
import { Contact } from './contact.model';

export interface Place {
  name: string;
  address: Address;
  tags: Array<string>;
  apiInfo: ApiInfoMap;
  contacts: Array<Contact>;
  avgPrice: number;
}
