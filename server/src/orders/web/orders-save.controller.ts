import { type Request, type Response } from 'express';

const saveOrdersHandler = async (req: Request, res: Response) => {
  return res.status(200).json('주문 등록 완료');
};

export default saveOrdersHandler;
