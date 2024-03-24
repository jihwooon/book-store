import app from 'src/app';
import request from 'supertest';

import { existingLike, nonExistingLike } from 'src/fixture/likes.fixture';

import { StatusCodes } from 'http-status-codes';
import HttpException from 'src/utils/httpException';

import { cancelLike } from '../application/cancel-like.service';

jest.mock('../application/cancel-like.service.ts');

describe('cancelLike Controller', () => {
  describe('DELETE /likes/{bookId}', () => {
    context('사용자 id와 도서 정보 id가 주어지고 좋아요 취소되면', () => {
      beforeEach(() => {
        (cancelLike as jest.Mock).mockResolvedValue(true);
      });
      it('200 상태코드를 반환한다.', async () => {
        const { statusCode, body } = await request(app)
          .delete(`/likes/${existingLike.likedBookId}`)
          .set(
            'Authorization',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYWJjZGVAZ21haWwuY29tIiwiaWF0IjoxNzEwNDIzODUxLCJleHAiOjE3MTA0MjQxNTF9.m1GUUsCHpMtaX3jScLJ-GACfZ_BEUQUnyMxrq_bg5FQ',
          );

        expect(statusCode).toBe(200);
        expect(body).toBe(true);
      });
    });

    context('사용자 id와 도서 정보 id가 주어지고 좋아요 추가에 실패한 경우,', () => {
      beforeEach(() => {
        (cancelLike as jest.Mock).mockRejectedValue(
          new HttpException('좋아요 취소에 실패했습니다.', StatusCodes.BAD_REQUEST),
        );
      });
      it('400 상태코드와 에러 메세지를 반환한다.', async () => {
        const { statusCode, body } = await request(app)
          .delete(`/likes/${nonExistingLike.likedBookId}`)
          .set(
            'Authorization',
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImVtYWlsIjoiYWJjZGVAZ21haWwuY29tIiwiaWF0IjoxNzEwNDIzODUxLCJleHAiOjE3MTA0MjQxNTF9.m1GUUsCHpMtaX3jScLJ-GACfZ_BEUQUnyMxrq_bg5FQ',
          );

        expect(statusCode).toBe(400);
        expect(body).toEqual({
          message: '좋아요 취소에 실패했습니다.',
          success: false,
          status: 400,
          timestamp: expect.any(String),
        });
      });
    });
  });
});
