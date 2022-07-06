import { RESTDataSource } from 'apollo-datasource-rest';
import { config } from 'dotenv';

config();

class BandsService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env['GENRES_URL'];
  }

  
}

export const bandsService = new BandsService();
