import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes';

const signupController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  res.status(StatusCodes.CREATED).json({
    email,
    password,
  });
};

export default signupController;
