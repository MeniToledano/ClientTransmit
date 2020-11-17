import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../registration/user';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  userNotFound = false;
  @Output() clickRegistration: EventEmitter<number> = new EventEmitter<number>();
  @Output() clickLogin: EventEmitter<string> = new EventEmitter<string>();

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }


  onClickRegistration(): void {
    this.clickRegistration.emit(2);
  }

  onClickLogin(userName: string, password: string): void {
    this.login = new Login(userName, password);
    this.userService.onLogIn(this.login).then(
      (response: string) => {
        if (response === 'not found'){
          this.userNotFound = true;
        } else {
          this.clickLogin.emit(response);
        }
      }
    );
  }
}
