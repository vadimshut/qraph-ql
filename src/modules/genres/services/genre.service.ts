import { CrudService } from '../../crudService';
import { config } from 'dotenv';
config();

export const genresService = new CrudService(process.env['GENRES_URL'] as string);
