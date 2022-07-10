import { IPagination } from '../../../interfaces/IPagination';
import { ITrackInput } from '../../../interfaces/ITrackInput';

const resolvers = {
  Query: {
    artists: async (_: any, { limit = 5, offset = 0 }: IPagination, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.tracksService.getArtefacts(limit, offset);
      return response;
    },

    artist: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.tracksService.getArtefact(id);
      return response;
    },
  },
  Mutation: {
    createTrack: async (_: any, { input }: { input: ITrackInput }, { dataSources }: { dataSources: any }) => {
      const result = dataSources.tracksService.createArtefact(input);
      return result;
    },
    updateTrack: async (
      _: any,
      { id, input }: { id: string; input: ITrackInput },
      { dataSources }: { dataSources: any },
    ) => {
      const result = dataSources.tracksService.updateArtefact(id, input);
      return result;
    },
    deleteTrack: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const result = dataSources.tracksService.deleteArtefact(id);
      return result;
    },
  },

  Track: {
    id: ({ _id }: { _id: string }) => _id,
    bands: async ({ bandsIds }: { bandsIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.getArtefactsByIdsList(bandsIds);
      return response;
    },
    artists: async ({ artistsIds }: { artistsIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.artistsService.getArtefactsByIdsList(artistsIds);
      return response;
    },

    genres: async ({ genresIds }: { genresIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.genresService.getArtefactsByIdsList(genresIds);
      return response;
    },
    album: async ({ albumId }: any, _: any, { dataSources }: any) => {
      const response = await dataSources.albumsService.getArtefact(albumId);
      return response;
    },
  },
};

export default resolvers;
