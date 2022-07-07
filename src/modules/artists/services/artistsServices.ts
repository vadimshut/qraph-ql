import { CrudService } from '../../crudService';
import { config } from 'dotenv';
config();

export const artistsService = new CrudService(process.env['ARTISTS_URL'] as string);
