import { StatusCodes } from 'http-status-codes';

import HttpException from '../../../utils/httpException';
import { findByEmail } from '../../domain/user.repository';

const passwordResetRequestor = async (
  email: string,
): Promise<{ email: string }> => {
  const validEmailUser = await findByEmail(email);
  if (!validEmailUser) {
    throw new HttpException('이메일을 찾을 수가 없습니다.', StatusCodes.NOT_FOUND);
  }

  return {
    email: validEmailUser.getEmail(),
  };
};

export default passwordResetRequestor;
