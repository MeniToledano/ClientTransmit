export class User {

  private userId: string;
  constructor(private userName: string,
              private password: string,
              private firstName: string,
              private lastName: string,
              private email: string,
              private phone: string) {
  }

  get getUserId(): string {
    return this.userId;
  }
  set setUserId(value: string) {
    this.userId = value;
  }
  get getUserName(): string {
    return this.userName;
  }

  get getPassword(): string {
    return this.password;
  }

  get getFirstName(): string {
    return this.firstName;
  }

  get getLastName(): string {
    return this.lastName;
  }

  get getEmail(): string {
    return this.email;
  }

  get getPhone(): string {
    return this.phone;
  }
}
