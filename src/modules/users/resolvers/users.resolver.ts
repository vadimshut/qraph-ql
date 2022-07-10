const resolvers = {
  Query: {
    login: async (
      _: any,
      { email, password }: { email: string; password: string },
      { dataSources }: { dataSources: any },
    ) => {
      const data = await dataSources.usersService.getJwt(email, password);
      return data;
    },

    user: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.usersService.getUser(id);
      return response;
    },
  },

  Mutation: {
    registration: async (_: any, { input }: any, { dataSources }: { dataSources: any }) => {
      const result = await dataSources.usersService.registration(input);
      return result;
    },
  },
  User: {
    secondName: ({ lastName }: { lastName: string }) => lastName,
  },
};

export default resolvers;
