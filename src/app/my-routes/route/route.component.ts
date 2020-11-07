import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  @Input() from: string;
  @Input() to: string;
  @Input() exitTime: string;
  @Input() arrivalTime: string;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onClickDelete(): void {
    this.delete.emit(this.index);
  }
}
