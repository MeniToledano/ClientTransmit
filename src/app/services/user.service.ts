import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from '../registration/user';
import {HttpReqService} from './http-req.service';
import {Login} from '../login/login';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  @Output() userName: EventEmitter<string> = new EventEmitter<string>();

  constructor(private httpReqService: HttpReqService) {
  }

  async onRegistration(user: User):
    Promise<any> {
    return this.httpReqService.postUser(user).toPromise().then(
      (response: User) => {
        this.user = response;
        this.userName.emit(this.user._firstName);
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

  async onLogIn(userCredentials: Login): Promise<any> {
    return this.httpReqService.getUser(userCredentials).toPromise().then(
      (response: User) => {
        this.user = response;
        this.userName.emit(this.user._firstName);
        return this.user._firstName;
      },
      (error) => {
        if (error.status === 404) {
          return 'not found';
        } else {
          console.log(error);
        }
      });
  }

  getUser(): string {
    if (this.user !== undefined) {
      return this.user._firstName;
    } else {
      return undefined;
    }
  }
  setUser(user: User): void{
    this.user = user;
  }
}

