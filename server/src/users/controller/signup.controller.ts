import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import logger from '../../config/logger';
import { save } from '../domain/user.repository';

const childLogger = logger.child({
  label: 'signup.controller.ts',
});

const signupController = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const registeredUser = await save(email, password, name);
  if (!registeredUser) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      error: '중복된 항목이 있습니다.',
    });
  }

  childLogger.info(registeredUser);

  return res.status(StatusCodes.CREATED).json('회원 가입이 정상적으로 되었습니다.');
};

export default signupController;
