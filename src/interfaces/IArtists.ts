import { IBand } from './IBand';

export interface IArtist {
  _id: string;
  firstName?: string;
  secondName?: string;
  middleName?: string;
  birthDate?: string;
  birthPlace?: string;
  country?: string;
  bands?: [IBand];
  instruments?: string;
}
