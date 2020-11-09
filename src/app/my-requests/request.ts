export class Request {
  constructor(private routeId: string,
              private titleField: string,
              private fromField: string,
              private toField: string,
              private msgField: string,
              private statusField: string) {
  }
  get getRouteId(): string {
    return this.routeId;
  }

  set setRouteId(value: string) {
    this.routeId = value;
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
