import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import signinService from '../application/signin.service';

const signinController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { accessToken } = await signinService(email, password);

  res.cookie('token', accessToken, {
    httpOnly: true,
  });

  return res.status(StatusCodes.OK).json({
    accessToken,
  });
};

export default signinController;
