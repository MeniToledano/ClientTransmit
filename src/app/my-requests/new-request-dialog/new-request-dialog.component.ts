import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Request} from '../request';
import {RequestService} from '../../services/request.service';


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
              @Inject(MAT_DIALOG_DATA) public data,
              private requestService: RequestService) {
  }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();

  }

  onSaveClick(item: string, to: string, from: string, msg: string): void {
    if (this.checkFields()) {
      this.dialogRef.close(new Request(null, item, from, to, msg, 'PENDING'));
    }
  }

  public checkFields(): boolean {
    this.selectTitle === '' ? this.titleSelected = false : this.titleSelected = true;
    this.selectMsg === '' ? this.msgSelected = false : this.msgSelected = true;
    this.selectedFromLocation === 'None' ? this.fromSelected = false : this.fromSelected = true;
    this.selectedToLocation === 'None' ? this.toSelected = false : this.toSelected = true;
    if (!this.titleSelected || !this.msgSelected || !this.fromSelected || !this.toSelected) {
      return false;
    }
    return true;
  }

}
