export class Route {
  constructor(private fromLocationn: string,
              private toLocationn: string,
              private exitTimee: string,
              private arivalTimee: string) {  }
  get fromLocation(): string {
    return this.fromLocationn;
  }

  get toLocation(): string {
    return this.toLocationn;
  }

  get exitTime(): string {
    return this.exitTimee;
  }

  get arrivalTime(): string {
    return this.arivalTimee;
  }

}
