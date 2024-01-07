import request from 'supertest';

import app from '../../../app';
import signupService from '../application/signup.service';
import { validUser, inValidUser } from '../../../fixture/user.fixture';

jest.mock('../application/signup.service.ts');

describe('signup Controller', () => {
  describe('POST /signup', () => {
    context('사용자가 올바른 정보를 입력하면', () => {
      beforeEach(() => {
        (signupService as jest.Mock).mockResolvedValue(true);
      });
      it('201 상태코드와 응답 메세지를 반환한다.', async () => {
        const { statusCode, body: { messages: message } } = await request(app).post('/signup').send(validUser);

        expect(statusCode).toBe(201);
        expect(message).toBe('회원 가입이 정상적으로 되었습니다.');
      });
    });

    context('사용자가 비정상 정보를 입력한 경우', () => {
      beforeEach(() => {
        (signupService as jest.Mock).mockResolvedValue(false);
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body: { messages } } = await request(app).post('/signup').send(inValidUser);

        expect(statusCode).toBe(400);
        expect(messages).toBe('회원 가입에 실패했습니다.');
      });
    });
  });
});
