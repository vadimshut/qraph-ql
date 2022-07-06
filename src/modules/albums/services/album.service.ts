import { RESTDataSource } from 'apollo-datasource-rest';

class AlbumsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env['ALBUMS_URL'];
  }

  async getAlbums() {
    const res = await this.get('/');
    console.log(res);
  }
}

export const albumsService = new AlbumsService();
