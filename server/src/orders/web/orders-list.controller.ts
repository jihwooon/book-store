import { type Request, type Response } from 'express';

const getAllOrdersHandler = async (req: Request, res: Response) => {
  return res.status(200).json([
    {
      orderId: 1,
      createAt: new Date(),
      delivery: {
        address: '서울시 경인로',
        receiver: '홍길동',
        contact: '010-1234-5667',
      },
      bookTitle: '홍길동전',
      totalPrice: 25000,
      totalCount: 5,
    },
  ]);
};

export default getAllOrdersHandler;
