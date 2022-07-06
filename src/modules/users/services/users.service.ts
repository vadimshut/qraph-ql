import { RESTDataSource } from 'apollo-datasource-rest';
import { config } from 'dotenv';
config();

export class UsersService extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env['USERS_URL'];
  }

  async getJwt(email: string, password: string) {
    const data = await this.post(`/login`, { email, password });
    return { jwt: data.jwt };
  }

  async getUser(id: string) {
    return await this.get(`/${id}`);
  }

  async registration(input: any) {
    return this.post('/register', {
      ...input,
    });
  }
}

export const usersService = new UsersService();
