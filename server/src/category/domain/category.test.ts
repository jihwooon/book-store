import Category from './category';

describe('Category Class', () => {
  describe('객체에 정보가 주어지면', () => {
    const category = new Category({
      id: 1,
      name: '자기계발',
    });

    it('멤버 변수 값을 리턴해야 한다.', () => {
      expect(category.getId()).toBe(1);
      expect(category.getName()).toBe('자기계발');
    });
  });

  describe('객체의 값이 주어지지 않으면', () => {
    const category = new Category({});

    it('멤버 변수 default 값을 리턴해야 한다.', () => {
      expect(category.getId()).toBe(0);
      expect(category.getName()).toBe('');
    });
  });
});
