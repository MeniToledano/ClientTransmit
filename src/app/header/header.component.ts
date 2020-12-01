import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router, RouterLink} from '@angular/router';
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
        if (this.userService.getUserFirstName() === undefined) {
          this.router.navigate(['login']);
        } else {
          if (this.router.url === '/login') {
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate([this.router.url]);
          }
          this.userName = this.userService.getUserFirstName();
        }
      }
    );
    this.userService.userName.subscribe((userName: string) => {
      this.userName = userName;
      this.isUserLogged = true;
    });
    this.router.events.subscribe((data) => {
      this.setChosenHeaderDesign();
    });
  }

  private setChosenHeaderDesign(): void {
    const page = this.router.url;
    if (page.toString().toLowerCase().includes('my-routes')) {
        this.chosenPage = 'myRoutes';
    }else  if (page.toString().toLowerCase().includes('my-requests')) {
      this.chosenPage = 'myRequests';
    }else{
      this.chosenPage = '';
    }
  }

  onClickFirstName(): void {
    this.router.navigate(['user-info']);
  }
}
