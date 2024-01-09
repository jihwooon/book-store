import jwt from 'jsonwebtoken';

import { StatusCodes } from 'http-status-codes';

import HttpException from '../../../utils/httpException';
import { isMatchPassword } from '../../domain/password.provider';
import { findByEmail } from '../../domain/user.repository';

const generateToken = (loginUser: { email: string; password: string; }) => jwt.sign({
  email: loginUser.email,
}, '1235467898910', {
  expiresIn: '5m',
});

const signinService = async (
  email: string,
  password: string,
): Promise<{ accessToken: string }> => {
  const loginUser = await findByEmail(email);
  if (!loginUser) {
    throw new HttpException('회원 정보를 찾을 수 없습니다.', StatusCodes.NOT_FOUND);
  }

  const validPassword = await isMatchPassword(
    loginUser.getPassword(),
    loginUser.getSalt(),
    password,
  );
  if (!validPassword) {
    throw new HttpException('패스워드가 일치 하지 않습니다.', StatusCodes.BAD_REQUEST);
  }

  const token = generateToken({ email: loginUser.getEmail(), password: loginUser.getPassword() });

  return {
    accessToken: token,
  };
};

export default signinService;
