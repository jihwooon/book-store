import { save } from '../../domain/user.repository';

const signupService = async (email: string, password: string, name: string): Promise<boolean> => {
  const savedUser = await save(email, password, name);
  if (!savedUser) {
    throw new Error('중복된 항목이 있습니다.');
  }

  return savedUser;
};

export default signupService;
