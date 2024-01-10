import { StatusCodes } from 'http-status-codes';
import { createHash, createSalt } from 'src/users/domain/password.provider';
import User from 'src/users/domain/user';
import { save } from 'src/users/domain/user.repository';
import HttpException from 'src/utils/httpException';

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
