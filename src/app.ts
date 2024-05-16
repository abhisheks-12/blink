import express, { NextFunction, Request, Response } from 'express';
import createError, { HttpError } from 'http-errors';
import { logger } from './config/logger';

const app = express();

app.get('/', async (req, res, next) => {
    const err = createError(401, 'you are not allowed to acess this page');
    // throw err;
    next(err);
    // await res.send('Welcome to auth service');
});

/* eslint-disable */
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    });
});

app.get('/home', (req, res) => {
    res.status(200).send('<h1>Home</h1>');
});

export default app;
