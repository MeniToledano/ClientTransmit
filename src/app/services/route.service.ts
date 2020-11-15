import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpReqService} from './http-req.service';
import {User} from '../registration/user';
import {Ad} from '../dashboard/ad';
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
        if (error.status === 404) {
          return 'not found';
        }else {
          console.log(error);
          return 'error';
        }
      });
  }
  setUserRoutes(userId: string, routes: Route[]): void {
    this.httpReqService.setUserRoutes(userId, routes).toPromise().then(
      (response: Route[]) => {
        this.userRoutes.emit(response);
      },
      (error) => {
        if (error.status === 404) {
          return 'not found';
        }else {
          console.log(error);
          return 'error';
        }
      });
  }

  deleteRoutes(routeId: string): void {
    this.httpReqService.deleteRoutes(routeId).toPromise().then(
      (response: Route[]) => {
        this.userRoutes.emit(response);
      },
      (error) => {
        if (error.status === 404) {
          return 'not found';
        }else {
          console.log(error);
          return 'error';
        }
      });
  }
}
