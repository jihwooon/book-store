import jwt from 'jsonwebtoken';

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
    throw new Error('회원 정보를 찾을 수 없습니다.');
  }

  isMatchPassword(loginUser.password, loginUser.salt, password);

  const token = generateToken(loginUser);

  return {
    accessToken: token,
  };
};

export default signinService;
