import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {StorageManagerService} from '../services/storage-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean;
  userName: string;
  chosenPage = '';

  constructor(private userService: UserService,
              private router: Router,
              private storageManagerService: StorageManagerService) {
  }

  ngOnInit(): void {
    this.userService.onLogIn(JSON.parse(this.storageManagerService.getData('credentials'))).then((data: any) => {
        if (this.userService.getUser() === undefined) {
          this.router.navigate(['login']);
        } else {
          this.router.navigate(['dashboard']);
          this.userName = this.userService.getUser();
        }
      }
    );

    this.userService.userName.subscribe((userName: string) => {
      this.userName = userName;
      this.isUserLogged = true;
    });
  }

}
