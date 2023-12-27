import * as winston from 'winston';
import 'winston-daily-rotate-file';

const {
  combine, timestamp, printf, splat,
} = winston.format;

const logFormat = printf(
  ({
    level,
    message,
    label,
    timestamp: time,
  }) => `${time} [${label}] ${level}: ${message}`,
);

const transportsInfo = new winston.transports.DailyRotateFile({
  level: 'info',
  filename: './logs/%DATE%.info.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '30d',
});

const transportsError = new winston.transports.DailyRotateFile({
  level: 'error',
  filename: './logs/%DATE%.error.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const exceptionHandlers = new winston.transports.DailyRotateFile({
  level: 'error',
  filename: './logs/%DATE%.exception.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    logFormat,
    splat(),
  ),
  transports: [
    transportsInfo,
    transportsError,
  ],
  exceptions: [
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
