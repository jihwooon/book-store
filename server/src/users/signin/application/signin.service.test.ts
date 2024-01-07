import { existingUser, inValidUser, nonExistingUser } from '../../../fixture/user.fixture';
import { isMatchPassword } from '../../domain/password.provider';
import User from '../../domain/user';
import { findByEmail } from '../../domain/user.repository';
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
        const token = await signinService(inValidUser.email, inValidUser.password);

        expect(token).toEqual({ accessToken: expect.any(String) });
      });
    });

    context('사용자 정보가 찾을 수 없으면', () => {
      beforeEach(() => {
        (findByEmail as jest.Mock).mockResolvedValue(undefined);
      });
      it('Error을 던져야 한다', async () => {
        await expect(signinService(nonExistingUser.email, nonExistingUser.password))
          .rejects.toThrow(new Error('회원 정보를 찾을 수 없습니다.'));
      });
    });
  });
});
