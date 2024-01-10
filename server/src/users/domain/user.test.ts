import { existingUser } from 'src/fixture/user.fixture';

import User from './user';

describe('User class', () => {
  context('객체에 값이 주어지면', () => {
    const user = new User(existingUser);

    it('멤버 변수를 값을 리턴해야 한다.', () => {
      expect(user.getId()).toBe(1);
      expect(user.getEmail()).toBe('abc@gmail.com');
      expect(user.getPassword()).toBe('12345');
      expect(user.getSalt()).toBe('ARNhEBG6dKaNBg==');
      expect(user.getName()).toBe('홍길동');
    });
  });

  context('객체의 값이 주어지지 않으면', () => {
    const user = new User({});

    it('멤버 변수를 default 값을 리턴해야 한다.', () => {
      expect(user.getId()).toBe(0);
      expect(user.getEmail()).toBe('');
      expect(user.getPassword()).toBe('');
      expect(user.getSalt()).toBe('');
      expect(user.getName()).toBe('');
    });
  });
});
