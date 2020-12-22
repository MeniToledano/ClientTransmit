import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {StorageManagerService} from './services/storage-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OnTheGo';
  userName: string;

  constructor(private userService: UserService,
              private  storageManagerService: StorageManagerService) {
  }

  ngOnInit(): void {
    if (this.storageManagerService.getData('credentials') !== null) {
      this.userService.onLogIn(JSON.parse(this.storageManagerService.getData('credentials')));
    }
  }

}
