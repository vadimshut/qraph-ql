import { RESTDataSource } from 'apollo-datasource-rest';
import { config } from 'dotenv';
import { EFavorite } from '../../../interfaces/EFavorites';
config();

class FavoriteService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env['FAVORITES_URL'];
  }

  async getFavorites() {
    return await this.get(
      '',
      {},
      {
        headers: {
          authorization: this.context.authToken,
        },
      },
    );
  }

  async addArtefact(id: string, type: EFavorite) {
    return await this.put(
      'add',
      { type, id },
      {
        headers: {
          authorization: this.context.authToken,
        },
      },
    );
  }

  async deleteArtefact(id: string, type: EFavorite) {
    return await this.put(
      'remove',
      { type, id },
      {
        headers: {
          authorization: this.context.authToken,
        },
      },
    );
  }
}

export const favoriteService = new FavoriteService();
