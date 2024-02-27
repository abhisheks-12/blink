import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: {
        serviceName: 'BLINK',
    },
    transports: [
        new winston.transports.File({
            dirname: 'logs',
            filename: 'error.log',
            level: 'info',
        }),
    ],
});

logger.debug('error');
