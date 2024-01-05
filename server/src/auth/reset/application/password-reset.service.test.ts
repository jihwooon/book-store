import { findByEmail } from '../../domain/user.repository';
import { passwordResetRequester } from './password-reset.service';

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
      (passwordResetRequester as jest.Mock).mockImplementation(() => true);
    });
    context('이메일이 존재하면', () => {
      it('true를 반환한다.', async () => {
        const verifiedEmail = await passwordResetRequester(userMock.email);

        expect(verifiedEmail).toBe(true);
      });
    });

    context('이메일이 존재하지 않으면', () => {
      beforeEach(() => {
        (passwordResetRequester as jest.Mock).mockImplementation(() => false);
      });
      it('false를 반환한다.', async () => {
        const verifiedEmail = await passwordResetRequester(userMock.email);

        expect(verifiedEmail).toBe(false);
      });
    });
  });
});
