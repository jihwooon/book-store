/* eslint-disable consistent-return */
/* eslint-disable indent */
import { type NextFunction, type Request, type Response } from 'express';
import { ZodError, type AnyZodObject } from 'zod';

export const validateHandler =
  <T extends AnyZodObject>(schema: T) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json(error);
      }
    }
  };
