import { type Request, type Response } from 'express';

const getOrdersDetailHandler = async ({ params: { orderId } }: Request, res: Response) => {
  return res.status(200).json([
    {
      bookId: 1,
      bookTitle: '홍길동전',
      author: '작가미상',
      price: 8000,
      count: 2,
    },
    {
      bookId: 2,
      bookTitle: '러닝 리액트',
      author: '알렉스 뱅크스',
      price: 25000,
      count: 1,
    },
    {
      bookId: 3,
      bookTitle: '우아한 타입스크립트 with 리액트',
      author: '우아한형제들 웹프론트그룹 지음',
      price: 22500,
      count: 10,
    },
  ]);
};

export default getOrdersDetailHandler;
