import { type Response } from "express";
import { type StatusCodes } from "http-status-codes";

export const ResponseHandler = async <T = any,>(
  func: () => Promise<T>,
  status: StatusCodes,
  res: Response,
) => {
  try {
    const result = await func();

    res.status(status).json(result);
  } catch (error: any) {
    const errorCode = error.status || 500;
    const errorMessage = error.message || "Internal Server Error";

    res.status(errorCode).json({
      success: false,
      message: errorMessage,
      status: errorCode,
      timestamp: new Date().toISOString(),
    });
  }
};
