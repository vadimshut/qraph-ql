import { IPagination } from '../../../interfaces/IPagination';

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

    genres: async (
        { genresIds }: { genresIds: string[] },
        _: any,
        { dataSources }: { dataSources: any }
      ) => {
        const response = await dataSources.genresService.getArtefactsByIdsList(genresIds)
        return response;  
    }
  },
};

export default resolvers;
