export const existingUser = {
  id: 1,
  email: 'abc@gmail.com',
  password: '12345678',
  name: '홍길동',
  salt: 'ARNhEBG6dKaNBg==',
};

export const nonExistingUser = {
  id: 2,
  email: 'invalidUser@gmail.com',
  password: 'incorrect_password',
  name: '홍길동',
  salt: 'ARNhEBG6dKBg==',
};

export const validUser = {
  id: 1,
  email: 'abc@gmail.com',
  password: '12345678',
  name: '홍길동',
  salt: 'ARNhEBG6dKaNBg==',
};

export const inValidUser = {
  id: 2,
  email: 'invalidUser@gmail.com',
  password: '12345678',
  name: '홍길동',
  salt: 'ARNhEBG6dKBg==',
};

export const notContainPasswordUser = {
  id: 1,
  email: 'invalidUser@gmail.com',
  name: '홍길동',
  salt: 'ARNhEBG6dKBg==',
};

export const minPasswordUser = {
  id: 1,
  email: 'invalidUser@gmail.com',
  password: '123',
  name: '홍길동',
  salt: 'ARNhEBG6dKBg==',
};

export const maxPasswordUser = {
  id: 1,
  email: 'invalidUser@gmail.com',
  password: 'passwordislongerthan20characters',
  name: '홍길동',
  salt: 'ARNhEBG6dKBg==',
};

export const wrongEmailUser = {
  id: 1,
  email: 'invaUsermail.com',
  password: '12345678',
  name: '홍길동',
  salt: 'ARNhEBG6dKBg==',
};

export const notContainEmailUser = {
  id: 1,
  password: '12345678',
  name: '홍길동',
  salt: 'ARNhEBG6dKBg==',
};

export const notContainNameUser = {
  id: 1,
  email: 'abc@gmail.com',
  password: '12345678',
  salt: 'ARNhEBG6dKaNBg==',
};
