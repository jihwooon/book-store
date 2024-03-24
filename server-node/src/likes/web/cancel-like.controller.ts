import { type Request, type Response } from 'express';
import { ResponseHandler } from 'src/utils/responseHandler';

import { StatusCodes } from 'http-status-codes';

import { cancelLike } from '../application/cancel-like.service';

const cancelLikeHandler = ({ params: { id }, headers }: Request, res: Response) => {
  const accessToken = headers.authorization;
  ResponseHandler(() => cancelLike(accessToken, Number(id)), StatusCodes.OK, res);
};

export default cancelLikeHandler;
