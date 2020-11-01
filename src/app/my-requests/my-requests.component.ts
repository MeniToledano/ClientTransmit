import {Component, OnInit} from '@angular/core';
import {RequestComponent} from './request/request.component';
@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  public requests = [];
  constructor() {
    this.requests = [ new RequestComponent(), new RequestComponent()];
  }

  ngOnInit(): void {
  }

}
