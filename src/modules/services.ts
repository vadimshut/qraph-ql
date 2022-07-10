import { albumsService } from './albums/services/album.service';
import { artistsService } from './artists/services/artistsServices';
import { bandsService } from './bands/services/bandsService';
import { favoriteService } from './favorites/services/favoriteService';
import { genresService } from './genres/services/genre.service';
import { tracksService } from './tracks/services/tracksService';
import { usersService } from './users/services/users.service';

export default {
  usersService,
  genresService,
  bandsService,
  albumsService,
  artistsService,
  tracksService,
  favoriteService,
};
