import { Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from '../../../utils/responseHandler';
import passwordResetRequestor from '../application/password-request.service';

const passwordResetRequestController = async (req: Request, res: Response) => {
  const { email } = req.body;

  ResponseHandler(() => passwordResetRequestor(email), StatusCodes.OK, res);
};

export default passwordResetRequestController;
