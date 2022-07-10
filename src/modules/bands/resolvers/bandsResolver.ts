import { IArtist } from '../../../interfaces/IArtists';
import { IBandInput } from '../../../interfaces/IBandInput';
import { IMember } from '../../../interfaces/IMemder';
import { IPagination } from '../../../interfaces/IPagination';

const resolvers = {
  Query: {
    bands: async (_: any, { limit = 5, offset = 0 }: IPagination, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.getArtefacts(limit, offset);
      return response;
    },

    band: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.getArtefact(id);
      return response;
    },
  },

  Mutation: {
    createBand: async (_: any, { input }: { input: IBandInput }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.createArtefact(input);
      return response;
    },
    updateBand: async (
      _: any,
      { id, input }: { id: string; input: IBandInput },
      { dataSources }: { dataSources: any },
    ) => {
      const response = await dataSources.bandsService.updateArtefact(id, input);
      return response;
    },
    deleteBand: async (_: any, { id }: { id: string }, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.bandsService.deleteArtefact(id);
      return response;
    },
  },

  Band: {
    id: ({ _id }: { _id: string }) => _id,
    genres: async ({ genresIds }: { genresIds: string[] }, _: any, { dataSources }: { dataSources: any }) => {
      const response = await dataSources.genresService.getArtefactsByIdsList(genresIds);
      return response;
    },
    members: ({ members }: { members: IMember[] }, _: any, { dataSources }: { dataSources: any }) => {
      Promise.allSettled(
        members.map(({ artist }: { artist: string }) =>
          dataSources.artistsService.get(artist).then((artists: IArtist[]) =>
            artists.map((artist, index) => {
              const { value } = artist as unknown as PromiseFulfilledResult<IArtist>;
              return {
                firstName: value.firstName,
                secondName: value.secondName,
                middleName: value.middleName,
                instrument: (members[index] as IMember).instrument,
                years: (members[index] as IMember).years,
              };
            }),
          ),
        ),
      );
    },
  },
};

export default resolvers;
