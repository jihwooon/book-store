import request from 'supertest';

import { StatusCodes } from 'http-status-codes';

import app from 'src/app';
import {
  inValidUser,
  maxPasswordUser,
  minPasswordUser,
  notContainEmailUser,
  notContainNameUser,
  notContainPasswordUser,
  validUser,
  wrongEmailUser,
} from 'src/fixture/user.fixture';

import HttpException from 'src/utils/httpException';

import signupService from '../application/signup.service';

jest.mock('../application/signup.service.ts');

describe('signup Controller', () => {
  describe('POST /signup', () => {
    context('사용자가 올바른 정보를 입력하면', () => {
      beforeEach(() => {
        (signupService as jest.Mock).mockResolvedValue(true);
      });
      it('201 상태코드를 반환한다.', async () => {
        const {
          statusCode,
          body: { data },
        } = await request(app).post('/signup').send(validUser);

        expect(statusCode).toBe(201);
        expect(data).toBe(true);
      });
    });

    context('사용자가 비정상 정보를 입력한 경우', () => {
      beforeEach(() => {
        (signupService as jest.Mock).mockRejectedValue(
          new HttpException('회원 가입에 실패했습니다.', StatusCodes.BAD_REQUEST),
        );
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send(inValidUser);

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          message: '회원 가입에 실패했습니다.',
          success: false,
          status: 400,
          timestamp: expect.any(String),
        });
      });
    });

    context('사용자가 password를 8자 미만으로 입력하면,', () => {
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send(minPasswordUser);

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          issues: [
            {
              code: 'too_small',
              minimum: 8,
              type: 'string',
              inclusive: true,
              exact: false,
              message: '패스워드는 8자 이상입니다.',
              path: ['body', 'password'],
            },
          ],
          name: 'ZodError',
        });
      });
    });

    context('사용자가 password를 입력하지 않으면,', () => {
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send(notContainPasswordUser);

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          issues: [
            {
              code: 'invalid_type',
              expected: 'string',
              received: 'undefined',
              path: ['body', 'password'],
              message: '패스워드는 필수 입력 값입니다.',
            },
          ],
          name: 'ZodError',
        });
      });
    });

    context('사용자가 password를 16자 이상으로 입력하면,', () => {
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send(maxPasswordUser);

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          issues: [
            {
              code: 'too_big',
              maximum: 16,
              type: 'string',
              inclusive: true,
              exact: false,
              message: '패스워드는 16자 이하입니다.',
              path: ['body', 'password'],
            },
          ],
          name: 'ZodError',
        });
      });
    });

    context('사용자가 email 형식을 올바르게 않게 입력하면,', () => {
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send(wrongEmailUser);

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          issues: [
            {
              validation: 'email',
              code: 'invalid_string',
              message: '올바른 이메일 형식을 입력하세요.',
              path: ['body', 'email'],
            },
          ],
          name: 'ZodError',
        });
      });
    });

    context('사용자가 email을 입력하지 않으면,', () => {
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send(notContainEmailUser);

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          issues: [
            {
              code: 'invalid_type',
              expected: 'string',
              received: 'undefined',
              path: ['body', 'email'],
              message: '이메일은 필수 입력 값입니다.',
            },
          ],
          name: 'ZodError',
        });
      });
    });

    context('사용자가 name을 입력하지 않으면,', () => {
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app).post('/signup').send(notContainNameUser);

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          issues: [
            {
              code: 'invalid_type',
              expected: 'string',
              received: 'undefined',
              path: ['body', 'name'],
              message: '이름은 필수 입력 값입니다.',
            },
          ],
          name: 'ZodError',
        });
      });
    });
  });
});
