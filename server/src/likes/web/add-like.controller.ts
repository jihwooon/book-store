import { type Request, type Response } from 'express';
import { ResponseHandler } from 'src/utils/responseHandler';

import { StatusCodes } from 'http-status-codes';

import { addLike } from '../application/add-like.service';

const addLikeHandler = ({
  params: { id },
  body: { userId },
}: Request, res: Response) => {
  ResponseHandler(
    () => addLike(userId, Number(id)),
    StatusCodes.CREATED,
    res,
  );
};

export default addLikeHandler;
