import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Login} from './login';
import {Router} from '@angular/router';
import {StorageManagerService} from '../services/storage-manager.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  login: Login;
  userNotFound = false;
  subscription: Subscription[] = [];

  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    const sub1 = this.userService.userError.subscribe((error: string) => {
      if (error.toLowerCase() === 'user not found') {
        this.userNotFound = true;
      } else if (error.toLowerCase() === 'unknown error') {
        window.alert('Error accord!');
      }
    });
    this.subscription.push(sub1);
  }

  onClickRegistration(): void {
    this.router.navigate(['registration']);
  }

  onClickLogin(userName: string, password: string): void {
    this.login = new Login(userName, password);
    this.userService.onLogIn(this.login);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
