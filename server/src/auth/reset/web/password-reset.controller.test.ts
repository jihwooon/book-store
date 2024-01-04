import request from 'supertest';

import app from '../../../app';
import { passwordResetRequester } from '../application/password-reset.service';

jest.mock('../application/password-reset.service.ts');

describe('passwordReset Controller', () => {
  const userMock = {
    email: 'abc@gmail.com',
  };

  describe('POST /reset', () => {
    context('올바른 이메일이 주어지면', () => {
      beforeEach(() => {
        (passwordResetRequester as jest.Mock).mockResolvedValue(true);
      });
      it('200 상태코드를 반환한다.', async () => {
        const { statusCode } = await request(app).post('/reset').send(
          userMock.email,
        );

        expect(statusCode).toBe(200);
      });
    });

    context('올바르지 못 한 이메일이 주어지면', () => {
      beforeEach(() => {
        (passwordResetRequester as jest.Mock).mockResolvedValue(false);
      });
      it('401 상태코드를 반환한다.', async () => {
        const { statusCode } = await request(app).post('/reset').send(
          userMock.email,
        );

        expect(statusCode).toBe(401);
      });
    });
  });
});
