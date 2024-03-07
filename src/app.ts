import express, { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';

const app = express();

app.get('/api/auth', (req, res) => {
    res.send('Welcome to auth service');
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({});

    return next();
});

export default app;
