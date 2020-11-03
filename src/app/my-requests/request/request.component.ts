import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit{

  @Input() title: string;
  @Input() from: string;
  @Input() to: string;
  @Input() status = 'PENDING';
  @Input() msg: string;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor(){ }

  ngOnInit(): void {
  }

  onClickDelete(): void {
    this.delete.emit(this.index);
  }
}

