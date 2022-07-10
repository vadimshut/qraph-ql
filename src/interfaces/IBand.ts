import { IMember } from './IMemder';

export interface IBand {
  _id: string;
  name?: string;
  origin?: string;
  members?: IMember[];
  website?: string;
  genresIds?: string[];
}
