import { RESTDataSource } from 'apollo-datasource-rest';

export class crudService extends RESTDataSource {
  constructor(serviceUrl: string) {
    super();
    this.baseURL = serviceUrl;
  }

  async getArtefacts(limit: number, offset: number) {
    const res = await this.get('', { limit, offset });
    return res.items;
  }

  async getArtefact(id: string) {
    return await this.get(`/${id}`);
  }

  async getArtefactsByIdsList(idsList: string[]) {
    const res = await Promise.allSettled(idsList.map((id: string) => this.getArtefact(id)));
    return res.map((item) => (item as unknown as PromiseFulfilledResult<any>).value);
  }

  async createArtefact(input: object) {
    return await this.post(
      '',
      { ...input },
      {
        headers: {
          authorization: this.context.authToken,
        },
      },
    );
  }

  async updateArtefact(id: string, input: object) {
    return await this.put(
      `/${id}`,
      { ...input },
      {
        headers: {
          authorization: this.context.authToken,
        },
      },
    );
  }

  async deleteArtefact(id: string) {
    return await this.delete(
      `/${id}`,
      {},
      {
        headers: {
          authorization: this.context.authToken,
        },
      },
    );
  }
}
