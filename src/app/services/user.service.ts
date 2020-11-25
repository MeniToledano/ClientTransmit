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
  @Output() userUpdated: EventEmitter<User> = new EventEmitter<User>();

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
      (error: Error) => {
        console.log(error.stack);
        if (error.name === 'UserAlreadyExistAuthenticationException') {
          console.log(error);
          return 'User name already exist';
        } else {
            alert('Server Error!');
        }
      }
    );
  }

  async onLogIn(userCredentials: Login): Promise<any> {
    return this.httpReqService.getUser(userCredentials).toPromise().then(
      (response: User) => {
        this.user = response;
        this.userName.emit(this.user._firstName);
        this.userUpdated.emit(this.user);
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

  getUserFirstName(): string {
    if (this.user !== undefined) {
      return this.user._firstName;
    } else {
      return undefined;
    }
  }
  getUser(): User{
    return this.user;
  }
  setUser(user: User): void{
    this.user = user;
  }
}

