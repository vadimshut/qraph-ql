import { IArtistInput } from '../../../interfaces/IArtistInput';
import { IPagination } from '../../../interfaces/IPagination';

const resolvers = {
  Query: {
    artists: async (_: any, { limit = 5, offset = 0 }: IPagination, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.artistsService.getArtefacts(limit, offset);
      return response;
    },

    artist: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.artistsService.getArtefact(id);
      return response;
    },
  },
  Mutation: {
    createArtist: async (_: any, { input }: { input: IArtistInput }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.artistsService.createArtefact(input);
      return response;
    },

    updateArtist: async (
      _: any,
      { id, input }: { id: string; input: IArtistInput },
      { dataSources }: { dataSources: any },
    ) => {
      const response = await dataSources.artistsService.updateArtefact(id, input);
      return response;
    },

    deleteArtist: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.deleteArtefact(id);
      return response;
    },
  },
  Artist: {
    id: ({ _id }: { _id: string }) => _id,
    bands: async ({ bandsIds }: { bandsIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.getArtefactsByIdsList(bandsIds);
      return response;
    },
  },
};

export default resolvers;
