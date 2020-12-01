import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-request',
  templateUrl: './dialog-request.component.html',
  styleUrls: ['./dialog-request.component.css']
})
export class DialogRequestComponent implements OnInit {

  modalTitle: string;
  modalMessage: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
  }

  ngOnInit(): void {
  }

}
