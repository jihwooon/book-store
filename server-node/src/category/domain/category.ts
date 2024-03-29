export default class Category {
  private id: number;

  private name: string;

  constructor({ id = 0, name = '' }: { id?: number; name?: string }) {
    this.id = id;
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }
}
