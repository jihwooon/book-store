import { existingLike } from 'src/fixture/likes.fixture';

import Like from './like';

describe('Like class', () => {
  context('객체에 값이 주어지면', () => {
    const like = new Like(existingLike);

    it('멤버 변수 값을 리턴해야 한다.', () => {
      expect(like.getUserId()).toBe(1);
      expect(like.getLikedBookId()).toBe(1);
    });
  });

  context('객체에 값이 주어지지 않으면', () => {
    const like = new Like({});

    it('멤버 변수 값을 리턴해야 한다.', () => {
      expect(like.getUserId()).toBe(0);
      expect(like.getLikedBookId()).toBe(0);
    });
  });
});
