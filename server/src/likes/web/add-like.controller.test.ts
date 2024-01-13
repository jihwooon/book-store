import app from 'src/app';
import request from 'supertest';

import { existingLike } from 'src/fixture/likes.fixture';

import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { addLike } from '../application/add-like.service';

jest.mock('../application/add-like.service.ts');

describe('addLike Controller', () => {
  describe('POST /likes/{bookId}', () => {
    context('사용자 id와 도서 정보 id가 주어지고 좋아요가 추가되면', () => {
      beforeEach(() => {
        (addLike as jest.Mock).mockResolvedValue(true);
      });
      it('201 상태코드를 반환한다.', async () => {
        const { statusCode, body: { data } } = await request(app)
          .post(`/likes/${existingLike.likedBookId}`)
          .send({ userId: existingLike.userId });

        expect(statusCode).toBe(201);
        expect(data).toBe(true);
      });
    });

    context('사용자 id와 도서 정보 id가 주어지고 좋아요 추가에 실패한 경우,', () => {
      beforeEach(() => {
        (addLike as jest.Mock).mockRejectedValue(
          new HttpException('좋아요 추가에 실패했습니다.', StatusCodes.BAD_REQUEST),
        );
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app)
          .post(`/likes/${existingLike.likedBookId}`)
          .send({ userId: existingLike.userId });

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          message: '좋아요 추가에 실패했습니다.',
          status: 400,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
