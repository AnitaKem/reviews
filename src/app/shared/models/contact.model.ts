import { ContactType } from './contact-type.model';

export interface Contact {
  type: ContactType;
  number?: string;
  info?: string;
}
