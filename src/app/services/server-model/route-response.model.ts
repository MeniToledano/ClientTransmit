export interface RouteData {
  routeId: string;
  toLocation: string;
  fromLocation: string;
  exitTime: string;
  arrivalTime: string;
}

export interface RouteResponse {
  routes: RouteData[];
}
