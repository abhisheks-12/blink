import app from './app';
import { Config } from './config/index';
import { logger } from './config/logger';

const startServer = () => {
    app.listen(Config.PORT, () => {
        logger.info(`Server is running on port ${Config.PORT}...`);
    });
};

startServer();
