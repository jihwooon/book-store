import crypto from 'crypto';

import { save } from '../../domain/user.repository';

const createHash = (password: string, salt: string) => {
  const hashPassword = crypto.pbkdf2Sync(password, salt, 10000, 10, 'sha512').toString('base64');
  return hashPassword;
};

const createSalt = () => crypto.randomBytes(10).toString('base64');

const signupService = async (email: string, password: string, name: string): Promise<boolean> => {
  const salt = createSalt();
  const hashPassword = createHash(password, salt);

  const savedUser = await save(email, hashPassword, name, salt);
  if (!savedUser) {
    throw new Error('중복된 항목이 있습니다.');
  }

  return savedUser;
};

export default signupService;
