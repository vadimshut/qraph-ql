// import { IMember } from "../../../interfaces/IMemder";
// import { IPagination } from "../../../interfaces/IPagination";


// const resolvers = {
//     Query: {
//         bands: async (_: any, { limit = 5, offset = 0 }: IPagination, { dataSources }: { dataSources: any }) => {
//             const response = await dataSources.getBands(limit, offset)
//         },

//         band: async (_: any, {id}: {id: string}, { dataSources }: { dataSources: any }) => {
//             const response = await dataSources.getBand(id)
//             return response
//         }
//     },

//     Band: {
//         id: ({ _id }: { _id: string }) => _id,
//         genres: async (
//             { genresIds }: { genresIds: string[] },
//             _: any,
//             { dataSources }: { dataSources: any }
//         ) => {
//             const response = await dataSources.genresService.getGenresByIds(genresIds)
//             return response
//         },
//         members: (
//             { members }: { members: IMember[] },
//             _: any,
//             { dataSources }: { dataSources: any }
//           ) => {
//             Promise.allSettled(
//                 members.map(({ artist }: { artist: string }) =>
//                   dataSources.artistsService.getItem(artist)
//                 )
//               ).then((res) =>
//                 res.map((item, index) => {
//                   const { value } = item as unknown as PromiseFulfilledResult<Artist>;
//                   return {
//                     firstName: value.firstName,
//                     secondName: value.secondName,
//                     middleName: value.middleName,
//                     instrument: members[index].instrument,
//                     years: members[index].years,
//                   };
//                 })
//               ),
//           }
//     }
// };

// export default resolvers;
