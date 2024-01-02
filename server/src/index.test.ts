import request from 'supertest';

import app from './app';

const context = describe;

describe('index', () => {
  context('GET /', () => {
    it('Hello World를 응답해야 한다', async () => {
      const { text } = await request(app).get('/');

      expect(text).toBe('Hello World');
    });
  });
});
