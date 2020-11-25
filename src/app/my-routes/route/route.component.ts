import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from '../../services/dialog.service';

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

  constructor(public dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  onClickDelete(): void {
    this.dialogService.openModal('alert', 'are you sure?', () => {
      this.delete.emit(this.index);
    });

  }
}
