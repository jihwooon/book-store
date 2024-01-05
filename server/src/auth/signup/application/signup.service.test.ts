import { save } from '../../domain/user.repository';
import signupService from './signup.service';

jest.mock('../../domain/user.repository.ts');

describe('Signup service', () => {
  const userMock = {
    email: 'abc@gmail.com',
    password: '12345',
    name: '홍길동',
  };

  describe('signupService', () => {
    beforeEach(() => {
      (save as jest.Mock).mockResolvedValue(true);
    });
    context('회원 가입 정보가 주어지고 저장에 성공하면', () => {
      it('true를 반환한다.', async () => {
        const savedUser = await signupService(userMock.email, userMock.password, userMock.name);

        expect(savedUser).toBe(true);
      });
    });

    context('회원 가입 정보가 주어지고 저장에 실패하면', () => {
      beforeEach(() => {
        (save as jest.Mock).mockResolvedValue(false);
      });
      it('Error을 던져야 한다', async () => {
        await expect(signupService(userMock.email, userMock.password, userMock.name))
          .rejects.toThrow(new Error('중복된 항목이 있습니다.'));
      });
    });
  });
});
