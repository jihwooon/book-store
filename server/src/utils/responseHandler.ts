import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import logger from 'src/config/logger';

export const ResponseHandler = async <T = any>(
  func: () => Promise<T>, status: StatusCodes, res: Response,
) => {
  try {
    const result = await func();

    res.status(status).json({
      data: result,
    });
  } catch (error: any) {
    logger.error(error.message);

    res.status(error.status).json({
      message: error.message,
      status: error.status,
      timestamp: new Date().toISOString(),
    });
  }
};
