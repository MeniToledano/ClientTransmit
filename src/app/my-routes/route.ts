import {RouteData} from '../services/server-model/route-response.model';

export class Route {
  private static route: Route;
  private static routes: Route[];

  constructor(private routeId: string,
              private fromLocation: string,
              private toLocation: string,
              private exitTime: string,
              private arrivalTime: string) {
  }

  get _routeId(): string {
    return this.routeId;
  }

  get _fromLocation(): string {
    return this.fromLocation;
  }

  get _toLocation(): string {
    return this.toLocation;
  }

  get _exitTime(): string {
    return this.exitTime;
  }

  get _arrivalTime(): string {
    return this.arrivalTime;
  }

  static arrPlainToClass(routesJson: RouteData[]): Route[] {
    this.routes = [];
    routesJson.forEach(route => this.routes.push(Route.plainToClass(route)));
    return this.routes;
  }

  static plainToClass(routes: RouteData): Route {
    this.route = null;
    this.route = new Route(
      routes.routeId,
      routes.fromLocation,
      routes.toLocation,
      routes.exitTime,
      routes.arrivalTime
    );
    return this.route;
  }
}
