import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {StorageManagerService} from './services/storage-manager.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'OnTheGo';
  userName: string;

  constructor(private userService: UserService,
              private  storageManagerService: StorageManagerService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.userService.onLogIn(JSON.parse(this.storageManagerService.getData('credentials'))).then((data: any) => {
        if (this.userService.getUserFirstName() !== undefined) {
          this.router.navigate([this.router.url]);
        }else {
          this.router.navigate(['dashboard']);
        }
      }
    );
  }

}
