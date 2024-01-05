import { findByEmail, updateUserByPassword } from '../../domain/user.repository';

export const passwordResetRequester = async (
  email: string,
): Promise<{ email: string }> => {
  const existedEmail = await findByEmail(email);
  if (!existedEmail) {
    throw new Error('이메일을 찾을 수가 없습니다.');
  }

  return existedEmail;
};

export const passwordResetter = async (
  email: string,
  password: string,
): Promise<boolean> => updateUserByPassword(email, password);
