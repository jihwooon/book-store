import { findByEmail, updateUserByPassword } from '../../domain/user.repository';
import { passwordResetRequester, passwordResetter } from './password-reset.service';

jest.mock('../../domain/user.repository.ts');

describe('PasswordReset service', () => {
  const userMock = {
    email: 'abc@gmail.com',
    password: '1234',
  };

  describe('passwordResetRequester', () => {
    beforeEach(() => {
      (findByEmail as jest.Mock).mockResolvedValue(userMock);
    });
    context('이메일이 주어지면', () => {
      it('검증 된 이메일를 반환한다.', async () => {
        const { email } = await passwordResetRequester(userMock.email);

        expect(email).toBe('abc@gmail.com');
      });
    });

    context('이메일이 존재하지 않으면', () => {
      beforeEach(() => {
        (findByEmail as jest.Mock).mockResolvedValue(undefined);
      });
      it('Error을 던져야 한다', async () => {
        await expect(passwordResetRequester(userMock.email)).rejects.toThrow(new Error('이메일을 찾을 수가 없습니다.'));
      });
    });
  });

  describe('passwordResetter', () => {
    context('패스워드 변경에 성공하면', () => {
      beforeEach(() => {
        (updateUserByPassword as jest.Mock).mockResolvedValue(true);
      });
      it('true를 반환한다.', async () => {
        const verifiedEmail = await passwordResetter(userMock.email, userMock.password);

        expect(verifiedEmail).toBe(true);
      });
    });

    context('패스워드 변경에 실패하면', () => {
      beforeEach(() => {
        (updateUserByPassword as jest.Mock).mockResolvedValue(false);
      });
      it('false를 반환한다.', async () => {
        const verifiedEmail = await passwordResetter(userMock.email, userMock.password);

        expect(verifiedEmail).toBe(false);
      });
    });
  });
});
