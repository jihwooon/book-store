import { isMatchPassword } from '../../domain/password.provider';
import { findByEmail } from '../../domain/user.repository';
import signinService from './signin.service';

jest.mock('../../domain/user.repository.ts');
jest.mock('./../../domain/password.provider.ts');

describe('Signin service', () => {
  const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQzNjM5ODksImV4cCI6MTcwNDM2NDI4OX0.8rGlNEppd0H3eEfmbHTMp-fXGUmRhBUQSsR7OB9IJvA';

  const userMock = {
    email: 'abc@gmail.com',
    password: '12345',
  };

  describe('signinService', () => {
    beforeEach(() => {
      (findByEmail as jest.Mock).mockResolvedValue(userMock);
      (isMatchPassword as jest.Mock).mockResolvedValue(true);
    });
    context('회원 정보가 주어지면', () => {
      it('패스워드 인증 후 accessToken을 반환한다.', async () => {
        const accessToken = await signinService(userMock.email, userMock.password);

        expect(accessToken).not.toEqual(ACCESS_TOKEN);
      });
    });

    context('찾을 수 없는 회원 정보가 주어지면', () => {
      beforeEach(() => {
        (findByEmail as jest.Mock).mockResolvedValue(undefined);
      });
      it('Error을 던져야 한다', async () => {
        await expect(signinService(userMock.email, userMock.password = 'incorrect_password'))
          .rejects.toThrow(new Error('회원 정보를 찾을 수 없습니다.'));
      });
    });
  });
});
