import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isUserLogged: boolean;
  userName: string;
  chosenPage = '';
  subscription: Subscription[] = [];
  constructor(private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    const sub1 = this.userService.userName.subscribe((userName: string) => {
      if (userName !== null) {
        this.userName = userName;
        this.isUserLogged = true;
      } else {
        this.isUserLogged = false;
      }
    });
    const sub2 = this.router.events.subscribe((data) => {
      this.setChosenHeaderDesign();
    });
    this.subscription.push(sub1);
    this.subscription.push(sub2);
  }

  onClickFirstName(): void {
    this.router.navigate(['user-info']);
  }

  onClickLogin(): void {
    this.router.navigate(['login']);
  }

  private setChosenHeaderDesign(): void {
    const page = this.router.url;
    if (page.toString().toLowerCase().includes('my-routes')) {
      this.chosenPage = 'myRoutes';
    } else if (page.toString().toLowerCase().includes('my-requests')) {
      this.chosenPage = 'myRequests';
    } else {
      this.chosenPage = '';
    }
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
