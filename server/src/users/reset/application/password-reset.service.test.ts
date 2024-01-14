import { StatusCodes } from 'http-status-codes';
import { updateUserByPasswordAndSalt } from 'src/users/domain/user.repository';

import { existingUser, validUser } from 'src/fixture/user.fixture';
import HttpException from 'src/utils/httpException';

import passwordResetter from './password-reset.service';

jest.mock('../../domain/user.repository.ts');

describe('passwordResetRequester service', () => {
  describe('passwordResetter', () => {
    context('사용자의 email과 password가 올바르게 입력되면 ', () => {
      beforeEach(() => {
        (updateUserByPasswordAndSalt as jest.Mock).mockResolvedValue(true);
      });
      it('password가 변경이 되어야 한다.', async () => {
        const resetPassword = await passwordResetter(validUser.email, validUser.password);

        expect(resetPassword).toBe(true);
      });
    });

    context('사용자의 email과 password가 비정상적으로 입력되면', () => {
      beforeEach(() => {
        (updateUserByPasswordAndSalt as jest.Mock).mockResolvedValue(false);
      });
      it('HttpException 에러를 던져야한다.', async () => {
        await expect(passwordResetter(existingUser.email, existingUser.password))
          .rejects.toThrow(
            new HttpException('패스워드 초기화에 실패했습니다.', StatusCodes.BAD_REQUEST),
          );
      });
    });
  });
});
