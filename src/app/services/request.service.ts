import { Injectable } from '@angular/core';
import {HttpReqService} from './http-req.service';
import {UserService} from './user.service';
import {Request} from '../my-requests/request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private requestedRoutes: Request[];
  constructor(private httpReqService: HttpReqService,
              private userService: UserService) { }

  updateRoutes(routes: Request[]): void{
    this.requestedRoutes = routes;
    this.updateServer();
  }

  private updateServer(): void {
    this.httpReqService.setUserRequestedRoutes(this.requestedRoutes, this.userService.user._userId).toPromise().then(
      (response) => {
        this.requestedRoutes = response;
      },
      (errors) => {
        console.log(errors);
      }
    );
  }
}
