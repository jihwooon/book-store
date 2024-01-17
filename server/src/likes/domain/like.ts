export default class Like {
  private userId: number;

  private likedBookId: number;

  constructor({ userId = 0, likedBookId = 0 }: { userId?: number; likedBookId?: number }) {
    this.userId = userId;
    this.likedBookId = likedBookId;
  }

  getDataOfLike() {
    return {
      userId: this.userId,
      likedBookId: this.likedBookId,
    };
  }
}
