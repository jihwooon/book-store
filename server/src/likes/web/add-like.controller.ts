import { type Request, type Response } from 'express';
import { ResponseHandler } from 'src/utils/responseHandler';

import { StatusCodes } from 'http-status-codes';

import { addLike } from '../application/add-like.service';

const addLikeHandler = ({ params: { id }, headers }: Request, res: Response) => {
  const accessToken = headers.authorization;
  ResponseHandler(() => addLike(accessToken, Number(id)), StatusCodes.CREATED, res);
};

export default addLikeHandler;
