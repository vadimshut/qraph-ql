import { CrudService } from '../../crudService';
import { config } from 'dotenv';
config();

export const albumsService = new CrudService(process.env['ALBUMS_URL'] as string);
