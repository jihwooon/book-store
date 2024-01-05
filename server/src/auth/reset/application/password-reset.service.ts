import { findByEmail, updateUserByPassword } from '../../domain/user.repository';

export const passwordResetRequester = async (
  email: string,
): Promise<boolean> => {
  const existedEmail = await findByEmail(email);
  if (!existedEmail) {
    return false;
  }

  return true;
};

export const passwordResetter = async (
  email: string,
  password: string,
): Promise<boolean> => updateUserByPassword(email, password);
