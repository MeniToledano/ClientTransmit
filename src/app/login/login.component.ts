import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../registration/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
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
    this.user = new User();
    this.user._userName = userName;
    this.user._password = password;
    this.userService.onLogIn(this.user).then(
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
