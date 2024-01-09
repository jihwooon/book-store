import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ResponseHandler } from '../../../utils/responseHandler';
import passwordResetter from '../application/password-reset.service';

const passwordResetController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  ResponseHandler(() => passwordResetter(email, password), StatusCodes.OK, res);
};

export default passwordResetController;
