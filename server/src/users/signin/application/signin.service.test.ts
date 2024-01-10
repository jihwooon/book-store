import { StatusCodes } from 'http-status-codes';
import { existingUser, nonExistingUser } from 'src/fixture/user.fixture';

import { isMatchPassword } from 'src/users/domain/password.provider';
import User from 'src/users/domain/user';
import { findByEmail } from 'src/users/domain/user.repository';

import HttpException from 'src/utils/httpException';

import signinService from './signin.service';

jest.mock('../../domain/user.repository.ts');
jest.mock('./../../domain/password.provider.ts');

describe('Signin service', () => {
  describe('signinService', () => {
    beforeEach(() => {
      (findByEmail as jest.Mock).mockResolvedValue(new User(existingUser));
      (isMatchPassword as jest.Mock).mockResolvedValue(true);
    });
    context('사용자가 올바른 정보를 입력한다면', () => {
      it('accessToken을 반환한다.', async () => {
        const token = await signinService(existingUser.email, existingUser.password);

        expect(token).toEqual({ accessToken: expect.any(String) });
      });
    });

    context('사용자 정보를 찾을 수 없으면', () => {
      beforeEach(() => {
        (findByEmail as jest.Mock).mockResolvedValue(undefined);
      });
      it('HttpException을 던져야 한다', async () => {
        await expect(signinService(nonExistingUser.email, nonExistingUser.password))
          .rejects.toThrow(new HttpException('회원 정보를 찾을 수 없습니다.', StatusCodes.NOT_FOUND));
      });
    });

    context('사용자 비밀번호가 일치하지 않으면', () => {
      beforeEach(() => {
        (isMatchPassword as jest.Mock).mockResolvedValue(false);
      });

      it('HttpException을 던져야 한다', async () => {
        await expect(signinService(nonExistingUser.email, nonExistingUser.password))
          .rejects.toThrow(new HttpException('패스워드가 일치 하지 않습니다.', StatusCodes.BAD_REQUEST));
      });
    });
  });
});
