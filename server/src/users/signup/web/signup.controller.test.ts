import request from 'supertest';

import { StatusCodes } from 'http-status-codes';

import app from '../../../app';
import { inValidUser, validUser } from '../../../fixture/user.fixture';
import HttpException from '../../../utils/httpException';
import signupService from '../application/signup.service';

jest.mock('../application/signup.service.ts');

describe('signup Controller', () => {
  describe('POST /signup', () => {
    context('사용자가 올바른 정보를 입력하면', () => {
      beforeEach(() => {
        (signupService as jest.Mock).mockResolvedValue(true);
      });
      it('201 상태코드를 반환한다.', async () => {
        const { statusCode, body: { data } } = await request(app).post('/signup').send(validUser);

        expect(statusCode).toBe(201);
        expect(data).toBe(true);
      });
    });

    context('사용자가 비정상 정보를 입력한 경우', () => {
      beforeEach(() => {
        (signupService as jest.Mock).mockRejectedValue(new HttpException('회원 가입에 실패했습니다.', StatusCodes.BAD_REQUEST));
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send(inValidUser);

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          message: '회원 가입에 실패했습니다.',
          status: 400,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
