import request from 'supertest';

import { StatusCodes } from 'http-status-codes';

import { when } from 'jest-when';

import app from '../../../app';
import { existingUser, nonExistingUser } from '../../../fixture/user.fixture';

import HttpException from '../../../utils/httpException';
import passwordResetRequestor from '../application/password-request.service';

jest.mock('../application/password-request.service.ts');

describe('passwordRequest Controller', () => {
  describe('POST /reset', () => {
    context('올바른 email이 주어지면', () => {
      beforeEach(() => {
        when(passwordResetRequestor as jest.Mock)
          .calledWith(existingUser.email)
          .mockResolvedValue(existingUser);
      });
      it('200 상태코드와 검증 된 email를 반환한다.', async () => {
        const { statusCode, body: { data: { email } } } = await request(app).post('/reset').send(
          existingUser.email,
        );

        expect(statusCode).toBe(200);
        expect(email).toBe('abc@gmail.com');
      });
    });

    context('올바르지 못 한 email이 주어지면', () => {
      beforeEach(() => {
        when(passwordResetRequestor as jest.Mock)
          .calledWith(nonExistingUser.email)
          .mockRejectedValue(new HttpException('이메일을 찾을 수가 없습니다.', StatusCodes.NOT_FOUND));
      });
      it('404 상태코드와 에러 메시지를 반환한다.', async () => {
        const { statusCode, body: { message } } = await request(app).post('/reset').send(
          nonExistingUser.email,
        );

        expect(statusCode).toBe(404);
        expect(message).toEqual('이메일을 찾을 수가 없습니다.');
      });
    });
  });
});
