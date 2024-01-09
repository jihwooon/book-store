import request from 'supertest';

import { StatusCodes } from 'http-status-codes';

import app from '../../../app';
import { inValidUser, validUser } from '../../../fixture/user.fixture';
import HttpException from '../../../utils/httpException';
import signinService from '../application/signin.service';

jest.mock('../application/signin.service.ts');

describe('signin Controller', () => {
  const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDQzNjM5ODksImV4cCI6MTcwNDM2NDI4OX0.8rGlNEppd0H3eEfmbHTMp-fXGUmRhBUQSsR7OB9IJvA';

  describe('POST /signin', () => {
    beforeEach(() => {
      (signinService as jest.Mock)
        .mockResolvedValue({ accessToken: ACCESS_TOKEN });
    });
    context('사용자의 로그인 정보가 입력되면', () => {
      it('200 상태코드와 accessToken을 반환한다..', async () => {
        const { statusCode, body: { data } } = await request(app).post('/signin').send({
          validUser,
        });

        expect(statusCode).toBe(200);
        expect(data).toBe(ACCESS_TOKEN);
      });
    });

    context('사용자의 로그인 정보가 입력되면', () => {
      beforeEach(() => {
        (signinService as jest.Mock).mockRejectedValue(new HttpException('회원 정보를 찾을 수 없습니다.', StatusCodes.NOT_FOUND));
      });
      it('404 상태코드와 accessToken을 반환한다..', async () => {
        const { statusCode, body } = await request(app).post('/signin').send({
          inValidUser,
        });

        expect(statusCode).toBe(404);
        expect(body).toEqual({
          message: '회원 정보를 찾을 수 없습니다.',
          status: 404,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
