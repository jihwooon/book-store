import { findByEmail } from '../../domain/user.repository';

export const passwordResetRequester = async (
  email: string,
): Promise<boolean> => {
  const existedEmail = await findByEmail(email);
  if (!existedEmail) {
    return false;
  }

  return true;
};

export default passwordResetRequester;
