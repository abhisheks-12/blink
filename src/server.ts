import app from './app';
import { Config } from './config/index';
import { logger } from './config/logger';

const startServer = () => {
    try {
        app.listen(Config.PORT, () => {
            logger.info(`Server is running on port ${Config.PORT}...`);
        });
    } catch (err) {
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }
};

startServer();
