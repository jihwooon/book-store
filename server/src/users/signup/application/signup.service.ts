import { createHash, createSalt } from '../../domain/password.provider';
import { save } from '../../domain/user.repository';

const signupService = async (email: string, password: string, name: string): Promise<boolean> => {
  const salt = await createSalt();
  const hashPassword = await createHash(password, salt);

  const savedUser = await save(email, hashPassword, name, salt);
  if (!savedUser) {
    throw new Error('중복된 항목이 있습니다.');
  }

  return savedUser;
};

export default signupService;
