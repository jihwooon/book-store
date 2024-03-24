import { existingUser } from 'src/fixture/user.fixture';

import User from './user';

describe('User class', () => {
  let user: User;
  context('객체에 값이 주어지면', () => {
    beforeEach(() => {
      user = new User(existingUser);
    });

    it('멤버 변수를 값을 리턴해야 한다.', () => {
      const dataUser = user.getDataOfUser();

      expect(dataUser.id).toBe(1);
      expect(dataUser.email).toBe('abc@gmail.com');
      expect(dataUser.password).toBe('12345678');
      expect(dataUser.salt).toBe('ARNhEBG6dKaNBg==');
      expect(dataUser.name).toBe('홍길동');
    });
  });

  context('객체의 값이 주어지지 않으면', () => {
    beforeEach(() => {
      user = new User({});
    });

    it('멤버 변수를 default 값을 리턴해야 한다.', () => {
      const dataUser = user.getDataOfUser();

      expect(dataUser.id).toBe(0);
      expect(dataUser.email).toBe('');
      expect(dataUser.password).toBe('');
      expect(dataUser.salt).toBe('');
      expect(dataUser.name).toBe('');
    });
  });
});
