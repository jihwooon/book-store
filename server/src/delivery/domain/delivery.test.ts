import Delivery from './delivery';

describe('Delivery Class', () => {
  let delivery: Delivery;

  describe('객체 정보가 주어진다면', () => {
    beforeEach(() => {
      delivery = new Delivery({ id: 1, address: '서울시 중구', contact: '010-1234-5678', receiver: '홍길동' });
    });

    it('값을 리턴해야 한다', () => {
      expect(delivery.getId()).toEqual(1);
      expect(delivery.getAddress()).toEqual('서울시 중구');
      expect(delivery.getContact()).toEqual('010-1234-5678');
      expect(delivery.getReceiver()).toEqual('홍길동');
    });
  });

  describe('객체 정보가 주어지지 않으면', () => {
    context('', () => {
      beforeEach(() => {
        delivery = new Delivery({});
      });

      it('값을 리턴해야 한다.', () => {
        expect(delivery).toEqual({ id: 0, address: '', contact: '', receiver: '' });
      });
    });
  });
});
