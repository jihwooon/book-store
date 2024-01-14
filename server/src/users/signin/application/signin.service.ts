import jwt from 'jsonwebtoken';

import { StatusCodes } from 'http-status-codes';
import { isMatchPassword } from 'src/users/domain/password.provider';
import { findByEmail } from 'src/users/domain/user.repository';
import HttpException from 'src/utils/httpException';

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
  const userData = loginUser.getDataOfUser();

  const validPassword = await isMatchPassword(
    userData.password,
    userData.salt,
    password,
  );
  if (!validPassword) {
    throw new HttpException('패스워드가 일치 하지 않습니다.', StatusCodes.BAD_REQUEST);
  }

  const token = generateToken({ email: userData.email, password: userData.password });

  return {
    accessToken: token,
  };
};

export default signinService;
