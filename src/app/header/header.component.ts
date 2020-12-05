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
              private router: Router) {
  }

  ngOnInit(): void {
    this.userService.userName.subscribe((userName: string) => {
      if (userName !== null){
        this.userName = userName;
        this.isUserLogged = true;
      } else {
        this.isUserLogged = false;
      }
    });
    this.router.events.subscribe((data) => {
      this.setChosenHeaderDesign();
    });
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

  onClickFirstName(): void {
    this.router.navigate(['user-info']);
  }

  onClickLogin(): void {
    this.router.navigate(['login']);
  }
}
