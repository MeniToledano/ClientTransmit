import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  item = 'fridge';
  from = 'Ashdod';
  to = 'TA';
  status = 'PENDING';
  msg = 'I need to move the fridge, its located at 3rd floor and needs to be moved to tel aviv at first floor. There’s an elevator, but it wont fit';
  constructor() { }

  ngOnInit(): void {
  }

}
