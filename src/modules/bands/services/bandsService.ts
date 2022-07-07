import { CrudService } from '../../crudService';
import { config } from 'dotenv';
config();

export const bandsService = new CrudService(process.env['BANDS_URL'] as string)

// class BandsService extends RESTDataSource {
//   constructor() {
//     super();
//     this.baseURL = process.env['BANDS_URL'];
//   }

//   async getBands(limit: number, offset: number) {
//     const response = await this.get('', { limit, offset });
//     const result: IBand[] = response.items.map((genre: IBand) => {
//       const id = genre._id;
//       return { ...genre, id };
//     });
//     return result;
//   }

//   async getBand(id: string) {
//     const response: IBand = await this.get(`/${id}`);
//     return { ...response, id: response._id };
//   }
// }

// export const bandsService = new BandsService();
