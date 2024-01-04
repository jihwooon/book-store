import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { passwordResetRequester } from '../application/password-reset.service';

export const passwordResetRequestController = async (req: Request, res: Response) => {
  const { email } = req.body;

  const verifiedEmail = await passwordResetRequester(email);
  if (!verifiedEmail) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }

  return res.status(StatusCodes.OK).end();
};
