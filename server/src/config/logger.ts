import * as winston from 'winston';

import 'winston-daily-rotate-file';

import rTracer from 'cls-rtracer';

const { combine, timestamp } = winston.format;

const transportsInfo = new winston.transports.DailyRotateFile({
  level: 'info',
  filename: './logs/%DATE%.info.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '30d',
});

const transportsError = new winston.transports.DailyRotateFile({
  level: 'error',
  filename: './logs/%DATE%.error.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const exceptionHandlers = new winston.transports.DailyRotateFile({
  level: 'error',
  filename: './logs/%DATE%.exception.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    winston.format.json(),
  ),
  defaultMeta: {
    get requestId() {
      return rTracer.id();
    },
  },
  transports: [
    transportsInfo,
    transportsError,
  ],
  exceptionHandlers: [
    exceptionHandlers,
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple(),
    ),
  }));
}

export default logger;
