import {Component, Input, OnInit} from '@angular/core';
import {Request} from '../../my-requests/request';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  @Input() request: Request;
  @Input() userName: string;
  @Input() userLastName: string;
  @Input() time: string;
  @Input() date: string;
  @Input() status: string;
  @Input() title: string;
  @Input() description: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
