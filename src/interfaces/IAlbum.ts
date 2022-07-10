import { IArtist } from './IArtists';
import { IBand } from './IBand';
import { IGenre } from './IGenge';
import { ITrack } from './ITrack';

export interface IAlbum {
  _id: string;
  name?: string;
  released?: number;
  artists?: [IArtist];
  bands?: [IBand];
  tracks?: [ITrack];
  genres?: [IGenre];
  image?: String;
}
