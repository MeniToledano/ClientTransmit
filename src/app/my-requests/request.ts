export class Request {
  constructor(private titleField: string,
              private fromField: string,
              private toField: string,
              private msgField: string) {  }
  get title(): string {
    return this.titleField;
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
