import {Component, OnInit} from '@angular/core';
import {Request} from '../my-requests/request';
import {Ad} from './ad';
import {User} from '../registration/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ad: Ad;
  user: User;
  ads: Ad[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.ad = new Ad();
    this.ad._request = new Request(null, 'Raanana', 'Ashdod', '07:00', '08:00 ');
    this.user = new User();
    this.user._firstName = 'Meni';
    this.user._lastName = 'Toledano';
    this.user._phone = '0523334847';
    this.user._email = 'meni@gmail.com';
    this.ad._user = this.user;
    this.ad._title = 'I need to move a fridge form a to b';
    this.ad._status = 'PENDING';
    this.ad._description = 'I need to move the fridge,its located at 3rd floor and needs to be moved to tel aviv at first floor.';
    this.ad._adLastModifiedTime = '07:00';
    this.ad._adLastModifiedDate = '07.09.1992';
    this.ads.push(this.ad);
    this.ads.push(this.ad);

  }

}
