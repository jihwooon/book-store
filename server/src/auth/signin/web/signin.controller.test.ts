import request from 'supertest';

import app from '../../../app';
import { validUser } from '../../../fixture/user.fixture';
import signinService from '../application/signin.service';

jest.mock('../application/signin.service.ts');

describe('signin Controller', () => {
  const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQzNjM5ODksImV4cCI6MTcwNDM2NDI4OX0.8rGlNEppd0H3eEfmbHTMp-fXGUmRhBUQSsR7OB9IJvA';

  describe('POST /signin', () => {
    beforeEach(() => {
      (signinService as jest.Mock).mockResolvedValue({ accessToken: ACCESS_TOKEN });
    });
    context('사용자의 로그인 정보가 입력되면', () => {
      it('200 상태코드와 accessToken을 반환한다..', async () => {
        const { statusCode, body: { accessToken: token } } = await request(app).post('/signin').send({
          validUser,
        });

        expect(statusCode).toBe(200);
        expect(token).toBe(ACCESS_TOKEN);
      });
    });
  });
});
