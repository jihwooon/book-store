import crypto from 'node:crypto';

export const createHash = (
  password: string,
  salt: string,
):Promise<string> => new Promise((resolve, reject) => {
  crypto.pbkdf2(password, salt, 10000, 10, 'sha512', (err, deivedKey) => {
    if (err) {
      reject(err);
    }
    resolve(deivedKey.toString('base64'));
  });
});

export const createSalt = () => new Promise<string>((resolve, reject) => {
  crypto.randomBytes(10, (err, buf) => {
    if (err) {
      reject(err);
    }
    resolve(buf.toString('base64'));
  });
});

export const isMatchPassword = async (
  storedPassword: string,
  salt: string,
  plainPassword: string,
): Promise<boolean> => {
  const hashPassword = await createHash(plainPassword, salt);
  if (storedPassword !== hashPassword) {
    throw new Error('패스워드가 일치 하지 않습니다.');
  }

  return true;
};
