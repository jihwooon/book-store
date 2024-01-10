import { StatusCodes } from 'http-status-codes';
import { createHash, createSalt } from 'src/users/domain/password.provider';
import { updateUserByPasswordAndSalt } from 'src/users/domain/user.repository';
import HttpException from 'src/utils/httpException';

const passwordResetter = async (
  email: string,
  rawPassword: string,
): Promise<boolean> => {
  const salt = await createSalt();
  const hashPassword = await createHash(rawPassword, salt);

  const resetPassword = await updateUserByPasswordAndSalt(email, hashPassword, salt);
  if (!resetPassword) {
    throw new HttpException('패스워드 초기화에 실패했습니다.', StatusCodes.BAD_REQUEST);
  }

  return resetPassword;
};

export default passwordResetter;
