export class Login {
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

  constructor(private userName: string,
              private password: string) {
  }

}
