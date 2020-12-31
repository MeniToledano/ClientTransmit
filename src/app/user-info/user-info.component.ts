import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../registration/user';
import {Router} from '@angular/router';
import {StorageManagerService} from '../services/storage-manager.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {
  showLoader = true;
  user: User;
  subscription: Subscription[] = [];
  constructor(private userService: UserService,
              private router: Router,
              private storageManagerService: StorageManagerService) {
  }

  ngOnInit(): void {
    this.setLoader();
    const sub1 = this.userService.userUpdated.subscribe((user: User) => {
      this.showLoader = false;
      this.user = user;
    });
    if (this.userService.getUser() !== undefined) {
      this.user = this.userService.getUser();
    }
    this.subscription.push(sub1);
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

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
