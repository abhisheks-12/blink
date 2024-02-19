import app from './app';
import { Config } from './config/index';

const startServer = () => {
    app.listen(Config.PORT, () => {
        console.log(`Server is running on port ${Config.PORT}...`);
    });
};

startServer();
