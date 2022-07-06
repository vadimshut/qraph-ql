export const albumsResolver = {
  Query: {
    albums: (_: any, __: any, { dataSources }: any) => dataSources.albumsService.getAlbums(),
  },
};
