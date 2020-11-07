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
    this.user = new User(userName, password, null, null, null, null);
    this.userService.onLogIn(this.user).then(
      (response: Response) => {
        this.clickLogin.emit(this.userService.user.getFirstName);
      }
    );
  }
}
