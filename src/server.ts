import app from './app';

import { Config } from './config/index';
import { logger } from './config/logger';

const PORT = Config.PORT;

app.listen(PORT, () => {
    logger.info(`App is running on ${PORT}`);
});
