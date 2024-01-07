import { createHash, createSalt } from '../../domain/password.provider';
import { findByEmail, updateUserByPasswordAndSalt } from '../../domain/user.repository';

export const passwordResetRequester = async (
  email: string,
): Promise<{ email: string }> => {
  const validEmailUser = await findByEmail(email);
  if (!validEmailUser) {
    throw new Error('이메일을 찾을 수가 없습니다.');
  }

  return {
    email: validEmailUser.getEmail(),
  };
};

export const passwordResetter = async (
  email: string,
  rawPassword: string,
): Promise<boolean> => {
  const salt = await createSalt();
  const hashPassword = await createHash(rawPassword, salt);

  const resetPassword = await updateUserByPasswordAndSalt(email, hashPassword, salt);

  return resetPassword;
};
