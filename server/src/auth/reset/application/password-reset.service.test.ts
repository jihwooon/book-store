import { existingUser, inValidUser, validUser } from '../../../fixture/user.fixture';
import { findByEmail, updateUserByPasswordAndSalt } from '../../domain/user.repository';
import { passwordResetRequester, passwordResetter } from './password-reset.service';

jest.mock('../../domain/user.repository.ts');

describe('PasswordReset service', () => {
  describe('passwordResetRequester', () => {
    beforeEach(() => {
      (findByEmail as jest.Mock).mockResolvedValue(existingUser);
    });
    context('사용자의 email이 올바르게 입력된 경우', () => {
      it('검증 된 이메일를 반환한다.', async () => {
        const { email } = await passwordResetRequester(validUser.email);

        expect(email).toBe('abc@gmail.com');
      });
    });

    context('사용자의 email이 올바르지 않으면', () => {
      beforeEach(() => {
        (findByEmail as jest.Mock).mockResolvedValue(undefined);
      });
      it('Error을 던져야 한다', async () => {
        await expect(passwordResetRequester(inValidUser.email)).rejects.toThrow(new Error('이메일을 찾을 수가 없습니다.'));
      });
    });
  });

  describe('passwordResetter', () => {
    context('사용자의 email과 password가 올바르게 입력되고 ', () => {
      beforeEach(() => {
        (updateUserByPasswordAndSalt as jest.Mock).mockResolvedValue(true);
      });
      it('password가 변경이 되어야 한다.', async () => {
        const resetPassword = await passwordResetter(validUser.email, validUser.password);

        expect(resetPassword).toBe(true);
      });
    });

    context('사용자의 email과 password가 비정상적으로 입력되고', () => {
      beforeEach(() => {
        (updateUserByPasswordAndSalt as jest.Mock).mockResolvedValue(false);
      });
      it('password 변경이 실패 되어야 한다.', async () => {
        const failedChange = await passwordResetter(existingUser.email, existingUser.password);

        expect(failedChange).toBe(false);
      });
    });
  });
});
