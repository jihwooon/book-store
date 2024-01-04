import { findByEmail } from '../../domain/user.repository';
import signinService from './signin.service';

jest.mock('../../domain/user.repository.ts');
jest.mock('./signin.service');

describe('Signin service', () => {
  const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQzNjM5ODksImV4cCI6MTcwNDM2NDI4OX0.8rGlNEppd0H3eEfmbHTMp-fXGUmRhBUQSsR7OB9IJvA';

  const userMock = {
    email: 'abc@gmail.com',
    password: '12345',
  };

  describe('signinService', () => {
    beforeEach(() => {
      (findByEmail as jest.Mock).mockResolvedValue(userMock);
    });
    context('이메일과 패스워드가 주어지면', () => {
      it('패스워드 인증 후 accessToken을 반환한다.', async () => {
        const accessToken = await signinService(userMock.email, userMock.password);

        expect(accessToken).not.toEqual(ACCESS_TOKEN);
      });
    });

    context('패스워드가 올바르지 않으면', () => {
      beforeEach(() => {
        (signinService as jest.Mock).mockRejectedValue(new Error('패스워드가 올바르지 않습니다.'));
      });
      it('Error을 던져야 한다', async () => {
        await expect(signinService(userMock.email, userMock.password = 'incorrect_password'))
          .rejects.toThrow(new Error('패스워드가 올바르지 않습니다.'));
      });
    });
  });
});
