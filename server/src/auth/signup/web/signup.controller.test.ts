import request from 'supertest';

import app from '../../../app';
import signupService from '../application/signup.service';

jest.mock('../application/signup.service.ts');

describe('signup Controller', () => {
  const userMock = {
    email: 'abc@gmail.com',
    password: '1234',
    name: '홍길동',
  };

  describe('POST /signup', () => {
    context('회원 가입 정보가 주어지고 저장에 성공하면', () => {
      beforeEach(() => {
        (signupService as jest.Mock).mockResolvedValue(true);
      });
      it('201 상태코드와 응답 메세지를 반환한다.', async () => {
        const { statusCode, body: { messages: message } } = await request(app).post('/signup').send(userMock);

        expect(statusCode).toBe(201);
        expect(message).toBe('회원 가입이 정상적으로 되었습니다.');
      });
    });

    context('회원 가입 정보가 주어지고 저장에 실패하면', () => {
      beforeEach(() => {
        (signupService as jest.Mock).mockResolvedValue(false);
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body: { messages } } = await request(app).post('/signup').send(userMock);

        expect(statusCode).toBe(400);
        expect(messages).toBe('회원 가입에 실패했습니다.');
      });
    });
  });
});
