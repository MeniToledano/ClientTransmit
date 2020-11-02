export class Request {
  constructor(private itemField: string,
              private fromField: string,
              private toField: string,
              private msgField: string) {  }
  get item(): string {
    return this.itemField;
  }

  get from(): string {
    return this.fromField;
  }

  get to(): string {
    return this.toField;
  }

  get msg(): string {
    return this.msgField;
  }

}
