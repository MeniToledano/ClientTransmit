import {UserData} from '../services/server-model/user-response.model';

export class User {
  constructor(){}
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
  private static u: User;
  private userId: string;
  private userName: string;
  private password: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phone: string;

  static plainToClass(userJson: UserData): User{
    this.u = new User();
    this.u._password = userJson.password;
    this.u._userId = userJson.userId;
    this.u._lastName = userJson.lastName;
    this.u._email = userJson.email;
    this.u._userName = userJson.userName;
    this.u._phone = userJson.phone;
    this.u._firstName = userJson.firstName;
    return this.u;
  }

}
