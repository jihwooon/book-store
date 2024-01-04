import request from 'supertest';

import app from '../../../app';
import { save } from '../../domain/user.repository';

jest.mock('../../domain/user.repository.ts');

describe('signup Controller', () => {
  const email = 'abc@gmail.com';
  const password = '12345';

  describe('POST /signup', () => {
    context('회원 가입 정보가 주어지고 저장에 성공하면', () => {
      beforeEach(() => {
        (save as jest.Mock).mockResolvedValue(() => true);
      });
      it('201 상태코드와 응답 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send({
          email,
          password,
        });

        expect(statusCode).toBe(201);
        expect(body).toStrictEqual('회원 가입이 정상적으로 되었습니다.');
      });
    });

    context('회원 가입 정보가 주어지고 저장에 실패하면', () => {
      beforeEach(() => {
        (save as jest.Mock).mockResolvedValue(() => false);
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send({
          email,
          password,
        });

        expect(statusCode).toBe(201);
        expect(body).toStrictEqual('회원 가입이 정상적으로 되었습니다.');
      });
    });
  });
});
