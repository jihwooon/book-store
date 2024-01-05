import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { passwordResetRequester, passwordResetter } from '../application/password-reset.service';

export const passwordResetRequestController = async (req: Request, res: Response) => {
  const { email } = req.body;

  const verifiedEmail = await passwordResetRequester(email);
  if (!verifiedEmail) {
    return res.status(StatusCodes.UNAUTHORIZED).end();
  }

  return res.status(StatusCodes.OK).end();
};

export const passwordResetController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const isRestedPassword = await passwordResetter(email, password);
  if (!isRestedPassword) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      messages: '패스워드 초기화에 실패했습니다.',
    });
  }

  return res.status(StatusCodes.OK).json({
    messages: '패스워드 초기화에 성공했습니다.',
  });
};
