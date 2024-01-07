import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import signupService from '../application/signup.service';

const signupController = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  const registeredUser = await signupService(email, password, name);
  if (!registeredUser) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      messages: '회원 가입에 실패했습니다.',
    });
  }

  return res.status(StatusCodes.CREATED).json({
    messages: '회원 가입이 정상적으로 되었습니다.',
  });
};

export default signupController;
