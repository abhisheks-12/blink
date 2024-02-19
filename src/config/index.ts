import { config } from 'dotenv';

config({ path: './src/.env' });

const { PORT } = process.env;

export const Config = {
    PORT,
};
