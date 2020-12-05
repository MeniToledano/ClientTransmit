import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Login} from './login';
import {Router} from '@angular/router';
import {StorageManagerService} from '../services/storage-manager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login;
  userNotFound = false;

  constructor(private userService: UserService,
              private router: Router,
              private storageManagerService: StorageManagerService) {
  }

  ngOnInit(): void {
    this.userService.userError.subscribe((error: string) => {
      if (error.toLowerCase() === 'user not found') {
        this.userNotFound = true;
      }else if (error.toLowerCase() === 'unknown error'){
        window.alert('Error accord!');
      }
    });
  }

  onClickRegistration(): void {
    this.router.navigate(['registration']);
  }

  onClickLogin(userName: string, password: string): void {
    this.login = new Login(userName, password);
    this.userService.onLogIn(this.login);
  }
}
