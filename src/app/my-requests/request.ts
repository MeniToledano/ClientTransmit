export class Request {

  constructor(private routeId: string,
              private toLocation: string,
              private fromLocation: string,
              private exitTime: string,
              private arrivalTime: string) {
  }
  get getRouteId(): string {
    return this.routeId;
  }
  get _exitTime(): string {
    return this.exitTime;
  }

  set _exitTime(value: string) {
    this.exitTime = value;
  }

  get _arrivalTime(): string {
    return this.arrivalTime;
  }

  set _arrivalTime(value: string) {
    this.arrivalTime = value;
  }
  set setRouteId(value: string) {
    this.routeId = value;
  }
  get _fromLocation(): string {
    return this.fromLocation;
  }
  set _fromLocation(value: string) {
    this.fromLocation = value;
  }

  get _toLocation(): string {
    return this.toLocation;
  }
  set _toLocation(value: string) {
    this.toLocation = value;
  }



}
