import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Request} from '../request';


@Component({
  selector: 'app-new-request-dialog',
  templateUrl: './new-request-dialog.component.html',
  styleUrls: ['./new-request-dialog.component.css']
})
export class NewRequestDialogComponent implements OnInit {
  selectedFromLocation = 'None';
  selectedToLocation = 'None';
  selectMsg = '';
  selectTitle = '';

  titleSelected = true;
  msgSelected = true;
  fromSelected = true;
  toSelected = true;

  constructor(public dialogRef: MatDialogRef<NewRequestDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();

  }

  onSaveClick(title: string, to: string, from: string, description: string): void {
    if (this.checkFields()) {
      this.dialogRef.close({ title, from, to, description});
    }
  }

  public checkFields(): boolean {
    this.selectTitle === '' ? this.titleSelected = false : this.titleSelected = true;
    this.selectMsg === '' ? this.msgSelected = false : this.msgSelected = true;
    this.selectedFromLocation === 'None' || this.selectedFromLocation === undefined ? this.fromSelected = false : this.fromSelected = true;
    this.selectedToLocation === 'None'  || this.selectedToLocation === undefined ? this.toSelected = false : this.toSelected = true;
    return !(!this.titleSelected || !this.msgSelected || !this.fromSelected || !this.toSelected);
  }

}
