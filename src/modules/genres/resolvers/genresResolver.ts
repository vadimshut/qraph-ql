import { IInputGenre } from '../../../interfaces/IInputGenre';
import { IPagination } from '../../../interfaces/IPagination';

const resolvers = {
  Query: {
    genres: async (_: any, { limit, offset }: IPagination, { dataSources }: { dataSources: any }) => {   
      const response = await dataSources.genresService.getArtefacts(limit, offset);      
      return response;
    },

    genre: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.genresService.getArtefact(id);
      return response;
    },
  },

  Mutation: {
    createGenre: async (_: any, { input }: { input: IInputGenre }, { dataSources }: any) => {
      const response = await dataSources.genresService.createArtefact(input);
      return response;
    },
    updateGenre: async (_: any, { id, input }: { id: string; input: IInputGenre }, { dataSources }: any) => {
      const response = await dataSources.genresService.updateArtefact(id, input);
      return response;
    },
    deleteGenre: async (_: any, { id }: { id: string }, { dataSources }: any) => {
      const response = await dataSources.genresService.deleteArtefact(id);
      return response;
    },
  },
  Genre: {
    id: ({ _id }: { _id: string }) => _id,
  }
};

export default resolvers;
