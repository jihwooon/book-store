import dotenv from 'dotenv';
import { StatusCodes } from 'http-status-codes';
import jwt, { type Secret } from 'jsonwebtoken';
import HttpException from 'src/utils/httpException';

dotenv.config();

export const generateToken = (loginUser: { userId: number; email: string; password: string }) => {
  const payload = {
    userId: loginUser.userId,
    email: loginUser.email,
  };

  return jwt.sign(payload, process.env.JWT_SECRET as Secret, {
    expiresIn: '5m',
  });
};

export const validateToken = (token: string) => {
  if (token == null || token === undefined || token === '') {
    throw new HttpException(`token는 ${token}이 될 수 없습니다`, StatusCodes.BAD_REQUEST);
  }

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET as Secret) as jwt.JwtPayload;

    return {
      userId,
    };
  } catch (e) {
    throw new HttpException('인증 할 수 없는 token 입니다', StatusCodes.UNAUTHORIZED);
  }
};
