import { findByEmail } from '../../domain/user.repository';
import { passwordResetRequester, passwordResetter } from './password-reset.service';

jest.mock('../../domain/user.repository.ts');
jest.mock('./password-reset.service.ts');

describe('PasswordReset service', () => {
  const userMock = {
    email: 'abc@gmail.com',
    password: '1234',
  };

  describe('passwordResetRequester', () => {
    beforeEach(() => {
      (findByEmail as jest.Mock).mockResolvedValue(userMock);
      (passwordResetRequester as jest.Mock).mockResolvedValue(userMock.email);
    });
    context('이메일이 주어지면', () => {
      it('검증 된 이메일를 반환한다.', async () => {
        const verifiedEmail = await passwordResetRequester(userMock.email);

        expect(verifiedEmail).toBe('abc@gmail.com');
      });
    });

    context('이메일이 존재하지 않으면', () => {
      beforeEach(() => {
        (passwordResetRequester as jest.Mock).mockRejectedValue(new Error('이메일을 찾을 수가 없습니다.'));
      });
      it('Error을 던져야 한다', async () => {
        await expect(passwordResetRequester(userMock.email)).rejects.toThrow(new Error('이메일을 찾을 수가 없습니다.'));
      });
    });
  });

  describe('passwordResetter', () => {
    context('패스워드 변경에 성공하면', () => {
      beforeEach(() => {
        (passwordResetter as jest.Mock).mockImplementation(() => true);
      });
      it('true를 반환한다.', async () => {
        const verifiedEmail = await passwordResetter(userMock.email, userMock.password);

        expect(verifiedEmail).toBe(true);
      });
    });

    context('패스워드 변경에 실패하면', () => {
      beforeEach(() => {
        (passwordResetter as jest.Mock).mockImplementation(() => false);
      });
      it('false를 반환한다.', async () => {
        const verifiedEmail = await passwordResetter(userMock.email, userMock.password);

        expect(verifiedEmail).toBe(false);
      });
    });
  });
});
