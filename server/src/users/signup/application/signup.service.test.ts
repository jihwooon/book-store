import { StatusCodes } from 'http-status-codes';

import { inValidUser, validUser } from '../../../fixture/user.fixture';
import HttpException from '../../../utils/httpException';
import { save } from '../../domain/user.repository';
import signupService from './signup.service';

jest.mock('../../domain/user.repository.ts');

describe('Signup service', () => {
  describe('signupService', () => {
    beforeEach(() => {
      (save as jest.Mock).mockResolvedValue(true);
    });
    context('사용자가 올바른 정보를 입력하면', () => {
      it('회원가입이 되어야 한다.', async () => {
        const savedUser = await signupService(
          validUser.email,
          validUser.password,
          validUser.name,
        );

        expect(savedUser).toBe(true);
      });
    });

    context('사용자가 비정상적인 정보를 입력될 경우', () => {
      beforeEach(() => {
        (save as jest.Mock).mockReturnValue(false);
      });
      it('HttpException을 던져야 한다', async () => {
        await expect(signupService(inValidUser.email, inValidUser.password, inValidUser.name))
          .rejects.toThrow(new HttpException('회원 가입에 실패했습니다.', StatusCodes.BAD_REQUEST));
      });
    });
  });
});
