import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-route',
  templateUrl: './dialog-route.component.html',
  styleUrls: ['./dialog-route.component.css']
})
export class DialogRouteComponent implements OnInit {
  modalTitle: string;
  modalMessage: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
    this.modalMessage = data.message;
  }

  ngOnInit(): void {
  }

}
