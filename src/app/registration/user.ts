import {UserData} from '../services/server-model/user-response.model';

export class User {
  // consider removing all getters and setters and make all elements public
  private static u: User;
  private userId: string;
  private userName: string;
  private password: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phone: string;

  constructor() {
  }

  get _userId(): string {
    return this.userId;
  }

  set _userId(value: string) {
    this.userId = value;
  }

  get _userName(): string {
    return this.userName;
  }

  set _userName(value: string) {
    this.userName = value;
  }

  get _password(): string {
    return this.password;
  }

  set _password(value: string) {
    this.password = value;
  }

  get _firstName(): string {
    return this.firstName;
  }

  set _firstName(value: string) {
    this.firstName = value;
  }

  get _lastName(): string {
    return this.lastName;
  }

  set _lastName(value: string) {
    this.lastName = value;
  }

  get _email(): string {
    return this.email;
  }

  set _email(value: string) {
    this.email = value;
  }

  get _phone(): string {
    return this.phone;
  }

  set _phone(value: string) {
    this.phone = value;
  }

  static plainToClass(userJson: UserData): User {
    const user = new User();
    user._password = userJson.password;
    user._userId = userJson.userId;
    user._lastName = userJson.lastName;
    user._email = userJson.email;
    user._userName = userJson.userName;
    user._phone = userJson.phone;
    user._firstName = userJson.firstName;
    return user;
  }

}
