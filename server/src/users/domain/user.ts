export default class User {
  private id: number;

  private email: string;

  private password: string;

  private salt: string;

  private name: string;

  constructor({
    id = 0,
    email = '',
    password = '',
    salt = '',
    name = '',
  }: {
    id?: number,
    email?: string,
    password?: string,
    salt?: string,
    name?: string
  }) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.salt = salt;
    this.name = name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }

  getSalt() {
    return this.salt;
  }

  getName() {
    return this.name;
  }
}
