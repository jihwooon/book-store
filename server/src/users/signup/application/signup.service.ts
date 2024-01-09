import { StatusCodes } from 'http-status-codes';

import HttpException from '../../../utils/httpException';
import { createHash, createSalt } from '../../domain/password.provider';
import User from '../../domain/user';
import { save } from '../../domain/user.repository';

const signupService = async (email: string, password: string, name: string): Promise<boolean> => {
  const salt = await createSalt();
  const hashPassword = await createHash(password, salt);

  const savedUser = await save(new User({
    email, password: hashPassword, name, salt,
  }));
  if (!savedUser) {
    throw new HttpException('회원 가입에 실패했습니다.', StatusCodes.BAD_REQUEST);
  }

  return savedUser;
};

export default signupService;
