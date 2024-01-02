import request from 'supertest';

import app from '../../app.js';

const context = describe;

const requestBody = {
  email: 'abc@gmail.com',
  password: '12345',
};

describe('signup controller (e2e)', () => {
  describe('POST /signup', () => {
    context('이메일와 패스워드가 주어지면', () => {
      it('201 CREATED를 응답한다.', async () => {
        const { statusCode, body } = await request(app)
          .post('/signup')
          .send(requestBody);

        expect(statusCode).toBe(201);
        expect(body).toEqual({
          email: 'abc@gmail.com',
          password: '12345',
        });
      });
    });
  });
});
