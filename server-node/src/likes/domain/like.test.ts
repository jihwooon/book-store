import { existingLike } from 'src/fixture/likes.fixture';

import Like from './like';

describe('Like class', () => {
  let like: Like;

  context('객체에 값이 주어지면', () => {
    beforeEach(() => {
      like = new Like(existingLike);
    });

    it('멤버 변수 값을 리턴해야 한다.', () => {
      const likeData = like.getDataOfLike();

      expect(likeData.likedBookId).toBe(1);
      expect(likeData.userId).toBe(1);
    });
  });

  context('객체에 값이 주어지지 않으면', () => {
    beforeEach(() => {
      like = new Like({});
    });

    it('멤버 변수 값을 리턴해야 한다.', () => {
      const likeData = like.getDataOfLike();

      expect(likeData.likedBookId).toBe(0);
      expect(likeData.userId).toBe(0);
    });
  });
});
