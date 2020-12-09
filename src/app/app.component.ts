import {Component, OnInit} from '@angular/core';
import {UserService} from './services/user.service';
import {StorageManagerService} from './services/storage-manager.service';
import {Router} from '@angular/router';

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
    console.log('this.storageManagerService.getData(\'credentials\'): ' + this.storageManagerService.getData('credentials'));
    if (this.storageManagerService.getData('credentials') !== null) {
      this.userService.onLogIn(JSON.parse(this.storageManagerService.getData('credentials')));
    }
  }

}
