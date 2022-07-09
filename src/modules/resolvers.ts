import usersResolver from './users/resolvers/users.resolver';
import genresResolver from './genres/resolvers/genresResolver';
import bandsResolver from './bands/resolvers/bandsResolver';
import artistsResolver from './artists/resolvers/artistsResolver';
import tracksResolver from './tracks/resolvers/tracksResolver';
import albumsResolver from './albums/resolvers/albums.resolver';

export default [usersResolver, genresResolver, bandsResolver, artistsResolver, tracksResolver, albumsResolver];
