import {CrudService} from '../../crudService'
import { config } from 'dotenv';
config();

export const genresService = new CrudService(process.env['GENRES_URL'] as string)

// class GenresService extends RESTDataSource {
//   constructor() {
//     super();
//     this.baseURL = process.env['GENRES_URL'];
//   }

//   async getGenres(limit: number, offset: number) {
//     const response = await this.get('', { limit, offset });
//     const result: IGenre[] = response.items.map((genre: IGenre) => {
//       const id = genre._id;
//       return { ...genre, id };
//     });
//     return result;
//   }

//   async getGenre(id: string) {
//     const response: IGenre = await this.get(`/${id}`);
//     return { ...response, id: response._id };
//   }

//   async createGenre(input: IInputGenre) {
//     const response: IGenre = await this.post(
//       '/',
//       { ...input },
//       {
//         headers: {
//           authorization: this.context.authToken,
//         },
//       },
//     );
//     return { ...response, id: response._id };
//   }

//   async updateGenre(id: string, input: IInputGenre) {
//     const response: IGenre = await this.put(
//       `/${id}`,
//       { ...input },
//       {
//         headers: {
//           authorization: this.context.authToken,
//         },
//       },
//     );
//     return { ...response, id: response._id };
//   }

//   async deleteGenre(id: string) {
//     return await this.delete(
//       `/${id}`,
//       {},
//       {
//         headers: {
//           authorization: this.context.authToken,
//         },
//       },
//     );
//   }

//   async getGenresByIds(arrayIds: string[]) {
//     const res = await Promise.allSettled(arrayIds.map((id: string) => this.getGenre(id)));
//     return res.map((item) => (item as unknown as PromiseFulfilledResult<any>).value);
//   }
// }

// export const genresService = new GenresService();
