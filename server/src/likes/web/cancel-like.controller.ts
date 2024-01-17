import { type Request, type Response } from 'express';
import { ResponseHandler } from 'src/utils/responseHandler';

import { StatusCodes } from 'http-status-codes';

import { cancelLike } from '../application/cancel-like.service';

const cancelLikeHandler = ({ params: { id }, body: { userId } }: Request, res: Response) => {
  ResponseHandler(() => cancelLike(userId, Number(id)), StatusCodes.OK, res);
};

export default cancelLikeHandler;
