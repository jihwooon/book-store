import { createHash, createSalt, isMatchPassword } from './password.provider';

jest.mock('./password.provider.ts');

describe('Password provider', () => {
  const hashedPassword = 'ZzexJPTyeg8RVg==';
  const salt = 'ARNhEBG6dKaNBg==';
  const userMock = {
    password: '12345',
  };

  describe('createHash', () => {
    beforeEach(() => {
      (createSalt as jest.Mock).mockResolvedValue(salt);
      (createHash as jest.Mock).mockResolvedValue(hashedPassword);
    });
    context('패스워드와 salt가 주어지면', () => {
      it('암호화 된 패스워드를 반환한다.', async () => {
        const hashPassword = await createHash(userMock.password, salt);

        expect(hashPassword).toEqual(expect.any(String));
      });
    });
  });

  describe('isMatchPassword', () => {
    beforeEach(() => {
      (createHash as jest.Mock).mockResolvedValue(salt);
      (isMatchPassword as jest.Mock).mockResolvedValue(true);
    });
    context('패스워드와 저장된 패스워드가 일치하면', () => {
      it('true를 반환한다.', async () => {
        const hashPassword = await isMatchPassword(hashedPassword, salt, userMock.password);

        expect(hashPassword).toEqual(true);
      });
    });

    context('패스워드가 일치하지 않으면', () => {
      beforeEach(() => {
        (isMatchPassword as jest.Mock).mockRejectedValue(Error('패스워드가 일치 하지 않습니다'));
      });
      it('Error를 던져야 한다.', async () => {
        await expect(isMatchPassword(hashedPassword, salt, userMock.password))
          .rejects.toThrow('패스워드가 일치 하지 않습니다');
      });
    });
  });
});
