import { IGenre } from '../../../interfaces/IGenge';
import { IInputGenre } from '../../../interfaces/IInputGenre';
import { IPagination } from '../../../interfaces/IPagination';

const resolvers = {
  Query: {
    genres: async (_: any, { limit = 5, offset = 0 }: IPagination, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.genresService.getGenres(limit, offset);
      return response;
    },

    genre: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.genresService.getGenre(id);
      return response;
    },
  },

  Mutation: {
    createGenre: async (_: any, { input }: { input: IInputGenre }, { dataSources }: any) => {
      const response = await dataSources.genresService.createGenre(input);
      return response;
    },
    updateGenre: async (_: any, { id, input }: { id: string; input: IInputGenre }, { dataSources }: any) => {
      const response = await dataSources.genresService.updateGenre(id, input);
      return response;
    },
    deleteGenre: async (_: any, { id }: { id: string }, { dataSources }: any) => {
      const response = await dataSources.genresService.deleteGenre(id);
      return response;
    },
  },
};

export default resolvers;
