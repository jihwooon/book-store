import { save } from '../domain/delivery.repository';
import { saveDelivery } from './delivery-save.service';

jest.mock('../domain/delivery.repository.ts');

describe('SaveDelivery service', () => {
  describe('saveDelivery', () => {
    beforeEach(() => {
      (save as jest.Mock).mockResolvedValue(1);
    });

    context('배송 정보를 입력하고 저장에 성공하면', () => {
      it('배송 정보 id 값을 반환한다.', async () => {
        const insertId = await saveDelivery('서울시 경인로', '홍길동', '010-123-3456');

        expect(insertId).toBe(1);
      });
    });
  });
});
