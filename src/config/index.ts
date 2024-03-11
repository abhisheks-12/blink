import { config } from 'dotenv';

config({ path: './src/.env' });

const { PORT } = process.env || 4000;

export const Config = {
    PORT,
};
