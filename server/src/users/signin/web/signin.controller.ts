import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from 'src/utils/responseHandler';

import signinService from '../application/signin.service';

const signinController = async (req: Request, res: Response) => {
  const signInFunction = async () => {
    const { email, password } = req.body;
    const { accessToken } = await signinService(email, password);

    res.cookie('token', accessToken, {
      httpOnly: true,
    });

    return accessToken;
  };

  ResponseHandler(signInFunction, StatusCodes.OK, res);
};

export default signinController;
