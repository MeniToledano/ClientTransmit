import {Component, OnInit} from '@angular/core';
import {Request} from '../my-requests/request';
import {Ad} from './ad';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  req: Request;
  req2: Request;
  ads: Ad[] = [];

  constructor() {
    this.req = new Request('I need to move a fridge form a to b', 'Ashdod', 'TLV',
      'I need to move the fridge,its located at 3rd floor and needs to be moved to tel aviv at first floor. ', 'PENDING');
    this.req2 = new Request('I need to move a fridge form a to b', 'Ashdod', 'TLV',
      'I need to move the fridge,its located at 3rd floor and needs to be moved to tel aviv at first floor. ', 'RESOLVED');
    this.ads.push(new Ad(this.req, 'Meni', 'Toledano', '07:00', '7.9.2006'));
    this.ads.push(new Ad(this.req2, 'Meni', 'Toledano', '07:00', '7.9.2006'));
  }

  ngOnInit(): void {
  }

}
