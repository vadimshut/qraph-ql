import { EFavorite } from '../../../interfaces/EFavorites';

const resolver = {
  Query: {
    favourites: (_: any, __: any, { dataSources }: { dataSources: any }) => dataSources.favoriteService.getFavorites(),
  },

  Mutation: {
    addTrackToFavourites: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.favoriteService.addArtefact(id, EFavorite.tracks);
      return result;
    },
    addBandToFavourites: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.favoriteService.addArtefact(id, EFavorite.bands);
      return result;
    },
    addArtistToFavourites: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.favoriteService.addArtefact(id, EFavorite.artists);
      return result;
    },
    addGenreToFavourites: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.favoriteService.addArtefact(id, EFavorite.genres);
      return result;
    },
    deleteTrackFromFavourites: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.favoriteService.deleteArtefact(id, EFavorite.tracks);
      return result;
    },
    deleteBandFromFavourites: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.favoriteService.deleteArtefact(id, EFavorite.bands);
      return result;
    },
    deleteArtistFromFavourites: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.favoriteService.deleteArtefact(id, EFavorite.artists);
      return result;
    },
    deleteGenreFromFavourites: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.favoriteService.deleteArtefact(id, EFavorite.genres);
      return result;
    },
  },
  Favourites: {
    id: ({ _id }: { _id: string }) => _id,
    bands: async ({ bandsIds }: { bandsIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.getArtefactsByIdsList(bandsIds);
      return response;
    },
    artists: async ({ artistsIds }: { artistsIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.artistsService.getArtefactsByIdsList(artistsIds);
      return response;
    },
    tracks: async ({ tracksIds }: { tracksIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.tracksService.getArtefactsByIdsList(tracksIds);
      return response;
    },
    genres: async ({ genresIds }: { genresIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.genresService.getArtefactsByIdsList(genresIds);
      return response;
    },
  },
};

export default resolver;
