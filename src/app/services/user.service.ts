import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from '../registration/user';
import {HttpReqService} from './http-req.service';
import {Login} from '../login/login';
import {StorageManagerService} from './storage-manager.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  @Output() userName: EventEmitter<string> = new EventEmitter<string>();
  @Output() userUpdated: EventEmitter<User> = new EventEmitter<User>();
  @Output() userError: EventEmitter<string> = new EventEmitter<string>();


  constructor(private httpReqService: HttpReqService,
              private storageManagerService: StorageManagerService,
              private router: Router) {
  }

  onRegistration(user: User): void {
    this.httpReqService.postUser(user).subscribe(
      (response: User) => {
        this.onUserLoggedIn(response);
        this.router.navigate(['dashboard']);
      },
      (error) => {
        this.registrationFailed(error);
      }
    );
  }

  onLogIn(userCredentials: Login): void {
    this.httpReqService.getUser(userCredentials).subscribe(
      (response: User) => {
        this.onUserLoggedIn(response);

        if (this.router.url === '/login') {
          this.router.navigate(['dashboard']);
        }
      },
      (error) => {
        this.loginFailed(error);
      });
  }

  getUser(): User {
    return this.user;
  }

  onUserLoggedIn(response: User): void {
    this.user = response;
    this.userName.emit(this.user._firstName);
    this.userUpdated.emit(this.user);
    this.storageManagerService.setData('credentials', JSON.stringify(new Login(this.user._userName, this.user._password)));
  }

  registrationFailed(error): void {
    console.log(error.error.message);
    if (error.error.message.toLowerCase() === 'user already exist') {
      this.userError.emit('User already exist');
    } else {
      this.userError.emit('unknown error');
      console.log(error);
    }
  }

  loginFailed(error): void {
    if (error.status === 404) {
      this.userError.emit('User Not Found!');
    } else {
      this.userError.emit('unknown error');
      console.log(error);
    }
  }

}

