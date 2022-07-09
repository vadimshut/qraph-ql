import { IAlbumInput } from '../../../interfaces/IAlbumInput';
import { IPagination } from '../../../interfaces/IPagination';

const resolvers = {
  Query: {
    albums: async (_: any, { limit = 5, offset = 0 }: IPagination, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.albumsService.getArtefacts(limit, offset);
      return response;
    },
    album: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.albumsService.getArtefact(id);
      return response;
    },
  },
  Mutation: {
    createAlbum: async (_: any, { input }: { input: IAlbumInput }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.albumsService.createArtefact(input);
      return response;
    },
    updateAlbum: async (
      _: any,
      { id, input }: { id: string; input: IAlbumInput },
      { dataSources }: { dataSources: any },
    ) => {
      const response = await dataSources.albumsService.updateArtefact(id, input);
      return response;
    },
    deleteAlbum: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.albumsService.deleteArtefact(id);
      return response;
    },
  },
  Album: {
    id: ({ _id }: { _id: string }) => _id,
    bands: async ({ bandsIds }: { bandsIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.getArtefactsByIdsList(bandsIds);
      return response;
    },
    artists: async ({ artistsIds }: { artistsIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.artistsService.getArtefactsByIdsList(artistsIds);
      return response;
    },
    tracks: async (
      { tracksIds }: { tracksIds: string[] },
      _: any,
      { dataSources }: { dataSources: any }
    ) => {
      const response = await dataSources.tracksService.getArtefactsByIdsList(tracksIds)
      return response;
    },
    genres: async ({ genresIds }: { genresIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.genresService.getArtefactsByIdsList(genresIds);
      return response;
    },
  },
};

export default resolvers;
