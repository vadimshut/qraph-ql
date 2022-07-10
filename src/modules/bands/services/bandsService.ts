import { CrudService } from '../../crudService';
import { config } from 'dotenv';
config();

export const bandsService = new CrudService(process.env['BANDS_URL'] as string);
