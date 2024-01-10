import { existingUser, nonExistingUser, validUser } from 'src/fixture/user.fixture';

import { createHash, createSalt, isMatchPassword } from './password.provider';

jest.mock('./password.provider.ts');

describe('Password provider', () => {
  const hashedPassword = 'ZzexJPTyeg8RVg==';
  const salt = 'ARNhEBG6dKaNBg==';

  describe('createHash', () => {
    beforeEach(() => {
      (createSalt as jest.Mock).mockResolvedValue(salt);
      (createHash as jest.Mock).mockResolvedValue(hashedPassword);
    });
    context('사용자의 password와 salt가 주어지면', () => {
      it('해시 password를 반환해야 한다.', async () => {
        const hashPassword = await createHash(validUser.password, salt);

        expect(hashPassword).toEqual(expect.any(String));
      });
    });
  });

  describe('isMatchPassword', () => {
    beforeEach(() => {
      (createHash as jest.Mock).mockResolvedValue(salt);
      (isMatchPassword as jest.Mock).mockResolvedValue(true);
    });
    context('사용자의 password와 스토리지에 저장 된 password가 일치하면', () => {
      it('검증에 성공해야 한다.', async () => {
        const success = await isMatchPassword(hashedPassword, salt, existingUser.password);

        expect(success).toEqual(true);
      });
    });

    context('사용자의 password와 스토리지에 저장 된 password가 불일치하면', () => {
      beforeEach(() => {
        (isMatchPassword as jest.Mock).mockRejectedValue(Error('패스워드가 일치 하지 않습니다'));
      });
      it('Error를 던져야 한다.', async () => {
        await expect(isMatchPassword(hashedPassword, salt, nonExistingUser.password))
          .rejects.toThrow('패스워드가 일치 하지 않습니다');
      });
    });
  });
});
