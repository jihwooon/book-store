import { type Response } from 'express';
import { type StatusCodes } from 'http-status-codes';

export const ResponseHandler = async <T = any>(
  func: () => Promise<T>, status: StatusCodes, res: Response,
) => {
  try {
    const result = await func();

    res.status(status).json({
      data: result,
    });
  } catch (error: any) {
    res.status(error.status).json({
      message: error.message,
      status: error.status,
      timestamp: new Date().toISOString(),
    });
  }
};
