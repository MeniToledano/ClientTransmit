export class Request {
  constructor(private titleField: string,
              private fromField: string,
              private toField: string,
              private msgField: string,
              private statusField: string) {
  }

  get status(): string {
    return this.statusField;
  }

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
