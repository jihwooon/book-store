import { StatusCodes } from 'http-status-codes';

import { findByEmail } from 'src/users/domain/user.repository';
import HttpException from 'src/utils/httpException';

const passwordResetRequestor = async (email: string): Promise<{ email: string }> => {
  const validEmailUser = await findByEmail(email);
  if (!validEmailUser) {
    throw new HttpException('이메일을 찾을 수가 없습니다.', StatusCodes.NOT_FOUND);
  }

  const userData = validEmailUser.getDataOfUser();

  return {
    email: userData.email,
  };
};

export default passwordResetRequestor;
