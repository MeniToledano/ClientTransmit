import { Injectable } from '@angular/core';
import {User} from '../registration/user';
import {HttpReqService} from './http-req.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private httpReqService: HttpReqService) { }

  async onRegistration(user: User):
    Promise<any>{
    return this.httpReqService.postUser(user).toPromise().then(
      (response: User) => {
        this.user = response;
        return this.user._firstName;
      },
      (error) => {
      if (error.status === 500) {
          console.log(error);
          return 'User name already exist';
        }
      }
    );
  }

  async onLogIn(user: User): Promise<any>{
    return this.httpReqService.getUser(user).toPromise().then(
      (response: User) => {
        this.user = response;
        return this.user._firstName;
      },
      (error) => {
        if (error.status === 404) {
          return 'not found';
        }else {
          console.log(error);
        }
      });
  }

}

