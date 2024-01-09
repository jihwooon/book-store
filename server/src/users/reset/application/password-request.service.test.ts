import { StatusCodes } from 'http-status-codes';

import { existingUser, inValidUser, validUser } from '../../../fixture/user.fixture';
import HttpException from '../../../utils/httpException';
import User from '../../domain/user';
import { findByEmail } from '../../domain/user.repository';
import passwordResetRequestor from './password-request.service';

jest.mock('../../domain/user.repository.ts');

describe('PasswordReset service', () => {
  describe('passwordResetRequester', () => {
    beforeEach(() => {
      (findByEmail as jest.Mock).mockResolvedValue(new User(existingUser));
    });
    context('사용자의 email이 올바르게 입력된 경우', () => {
      it('저장 된 email를 반환한다.', async () => {
        const { email } = await passwordResetRequestor(validUser.email);

        expect(email).toBe('abc@gmail.com');
      });
    });

    context('사용자의 email이 올바르지 않으면', () => {
      beforeEach(() => {
        (findByEmail as jest.Mock).mockResolvedValue(undefined);
      });
      it('HttpException을 던져야 한다', async () => {
        await expect(passwordResetRequestor(inValidUser.email))
          .rejects.toThrow(new HttpException('이메일을 찾을 수가 없습니다.', StatusCodes.NOT_FOUND));
      });
    });
  });
});
