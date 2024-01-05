import request from 'supertest';

import app from '../../../app';
import { passwordResetRequester, passwordResetter } from '../application/password-reset.service';

jest.mock('../application/password-reset.service.ts');

describe('passwordReset Controller', () => {
  const userMock = {
    email: 'abc@gmail.com',
    password: '1234',
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

  describe('PUT /reset', () => {
    context('이메일과 패스워드가 주어지고 초기화 성공하면', () => {
      beforeEach(() => {
        (passwordResetter as jest.Mock).mockResolvedValue(true);
      });
      it('400 상태코드와 응답 메세지를 반환한다.', async () => {
        const { statusCode, body: { messages: message } } = await request(app).put('/reset').send({
          userMock,
        });

        expect(statusCode).toBe(200);
        expect(message).toBe('패스워드 초기화에 성공했습니다.');
      });
    });

    context('이메일과 패스워드가 주어지고 초기화 실패하면', () => {
      beforeEach(() => {
        (passwordResetter as jest.Mock).mockResolvedValue(false);
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body: { messages: message } } = await request(app).put('/reset').send({
          userMock,
        });

        expect(statusCode).toBe(400);
        expect(message).toBe('패스워드 초기화에 실패했습니다.');
      });
    });
  });
});
