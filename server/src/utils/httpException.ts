export default class HttpException extends Error {
  declare message: string;

  declare status: number;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
  }
}
