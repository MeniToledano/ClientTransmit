import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {User} from '../../registration/user';
import {DialogData} from '../my-requests.component';

@Component({
  selector: 'app-show-volunteer-credentials',
  templateUrl: './show-volunteer-credentials.component.html',
  styleUrls: ['./show-volunteer-credentials.component.css']
})
export class ShowVolunteerCredentialsComponent implements OnInit {
  volunteer: User;

  constructor(public dialogRef: MatDialogRef<ShowVolunteerCredentialsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit(): void {
    this.volunteer = this.data.volunteer;
  }

  onClickOk(): void {
    this.dialogRef.close();
  }
}
