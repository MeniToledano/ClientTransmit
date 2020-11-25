import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DialogService} from '../../services/dialog.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  @Input() title: string;
  @Input() from: string;
  @Input() to: string;
  @Input() status = 'PENDING';
  @Input() description: string;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() statusChange: EventEmitter<{ string, number }> = new EventEmitter<{ string, number }>();
  @Output() statusClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(public dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  onClickDelete(): void {
    this.dialogService.openModal('alert', 'are you sure?', () => {
      this.delete.emit(this.index);
    });
  }

  onChangeStatus(status: string): void {
    this.status = status;
    this.statusChange.emit({string: status, number: this.index});
  }

  onClickStatus(): void {
    this.statusClicked.emit(this.index);
  }
}

