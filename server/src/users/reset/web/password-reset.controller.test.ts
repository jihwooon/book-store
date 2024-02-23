import request from 'supertest';

import { StatusCodes } from 'http-status-codes';

import app from 'src/app';
import { existingUser } from 'src/fixture/user.fixture';

import HttpException from 'src/utils/httpException';

import passwordResetter from '../application/password-reset.service';

jest.mock('../application/password-reset.service.ts');

describe('passwordReset Controller', () => {
  describe('PUT /reset', () => {
    context('이메일과 패스워드가 주어지고 초기화 성공하면', () => {
      beforeEach(() => {
        (passwordResetter as jest.Mock).mockResolvedValue(true);
      });
      it('400 상태코드와 응답 메세지를 반환한다.', async () => {
        const {
          statusCode,
          body: { data },
        } = await request(app).put('/reset').send({
          existingUser,
        });

        expect(statusCode).toBe(200);
        expect(data).toBe(true);
      });
    });

    context('이메일과 패스워드가 주어지고 초기화 실패하면', () => {
      beforeEach(() => {
        (passwordResetter as jest.Mock).mockRejectedValue(
          new HttpException('패스워드 초기화에 실패했습니다.', StatusCodes.BAD_REQUEST),
        );
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).put('/reset').send({
          existingUser,
        });

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          message: '패스워드 초기화에 실패했습니다.',
          success: false,
          status: 400,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
