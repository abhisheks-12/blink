import express from 'express';

const app = express();

app.get('/api/auth', (req, res) => {
    res.send('Welcome to auth service');
});

export default app;
