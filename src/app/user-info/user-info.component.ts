import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../registration/user';
import {Router} from '@angular/router';
import {StorageManagerService} from '../services/storage-manager.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  showLoader = true;
  user: User;

  constructor(private userService: UserService,
              private router: Router,
              private storageManagerService: StorageManagerService) {
  }

  ngOnInit(): void {
    this.setLoader();
    this.userService.userUpdated.subscribe((user: User) => {
      this.showLoader = false;
      this.user = user;
    });
    if (this.userService.getUser() !== undefined) {
      this.user = this.userService.getUser();
    }
  }

  onClickLogOut(): void {
    this.storageManagerService.deleteData('credentials');
    this.router.navigate(['login']);
    this.userService.userName.emit(null);
  }

  private setLoader(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
}
