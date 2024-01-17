import { z } from 'zod';

export const sinupSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: '이름은 필수 입력 값입니다.',
    }),
    email: z
      .string({
        required_error: '이메일은 필수 입력 값입니다.',
      })
      .email('올바른 이메일 형식을 입력하세요.'),
    password: z
      .string({
        required_error: '패스워드는 필수 입력 값입니다.',
      })
      .min(8, { message: '패스워드는 8자 이상입니다.' })
      .max(16, { message: '패스워드는 16자 이하입니다.' }),
  }),
});
