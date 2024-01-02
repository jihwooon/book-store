import { StatusCodes } from 'http-status-codes';

const signupController = async (req, res) => {
  const { email, password } = req.body;

  res.status(StatusCodes.CREATED).json({
    email,
    password,
  });
};

export default signupController;
