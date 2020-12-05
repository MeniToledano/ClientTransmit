import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpReqService} from './http-req.service';

import {Route} from '../my-routes/route';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  @Output() userRoutes: EventEmitter<Route[]> = new EventEmitter<Route[]>();

  constructor(private httpReqService: HttpReqService) {
  }

  getUserRoutes(userId: string): void {
    this.httpReqService.getUserRoutes(userId).toPromise().then(
      (response: Route[]) => {
        this.userRoutes.emit(response);
      },
      (error) => {
        this.handleError(error);
      });
  }

  setUserRoutes(userId: string, routes: Route[]): void {
    this.httpReqService.setUserRoutes(userId, routes).toPromise().then(
      (response: Route[]) => {
        this.userRoutes.emit(response);
      },
      (error) => {
        this.handleError(error);
      });
  }

  deleteRoutes(routeId: string): void {
    this.httpReqService.deleteRoutes(routeId).toPromise().then(
      (response: Route[]) => {
        this.userRoutes.emit(response);
      },
      (error) => {
        this.handleError(error);
      });
  }

  handleError(error): void {
    if (error != null) {
      if (error.status === 404) {
        console.log(error);
        console.log('not found');
      } else {
        console.log(error);
        console.log('error');
      }
    }
  }
}
