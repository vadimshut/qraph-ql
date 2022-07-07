import { IAlbum } from './Ialbum';
import { IBand } from './IBand';
import { IGenre } from './IGenge';

export interface ITrack {
  id: string;
  title: string;
  albums?: [IAlbum];
  bands?: [IBand];
  duration?: number;
  released?: number;
  genres?: [IGenre];
}
