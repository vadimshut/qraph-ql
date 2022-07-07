import { CrudService } from '../../crudService';
import { config } from 'dotenv';
config();

export const tracksService = new CrudService(process.env['TRACKS_URL'] as string);
