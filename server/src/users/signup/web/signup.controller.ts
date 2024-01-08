import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from '../../../utils/responseHandler';
import signupService from '../application/signup.service';

const signupController = async (req: Request, res: Response) => {
  const { email, password, name } = req.body;

  ResponseHandler(() => signupService(email, password, name), StatusCodes.CREATED, res);
};

export default signupController;
