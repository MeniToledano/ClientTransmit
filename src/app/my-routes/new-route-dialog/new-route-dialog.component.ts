import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Route} from '../route';

@Component({
  selector: 'app-new-route-dialog',
  templateUrl: './new-route-dialog.component.html',
  styleUrls: ['./new-route-dialog.component.css']
})
export class NewRouteDialogComponent implements OnInit {

  selectedFromLocation = '';
  selectedToLocation = '';
  selectedExitTime = '';
  selectedArrivalTime = '';

  exitTimeSelected = true;
  arrivalTimeSelected = true;
  fromSelected = true;
  toSelected = true;

  constructor(public dialogRef: MatDialogRef<NewRouteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
  }

  onCancelClick(): void {
    this.dialogRef.close();

  }

  onSaveClick(): void {
    if (this.checkFields()) {
      this.dialogRef.close(new Route(this.selectedFromLocation, this.selectedToLocation, this.selectedExitTime, this.selectedArrivalTime));
    }
  }

  public checkFields(): boolean {
    this.selectedArrivalTime === '' ? this.arrivalTimeSelected = false : this.arrivalTimeSelected = true;
    this.selectedExitTime === '' ? this.exitTimeSelected = false : this.exitTimeSelected = true;
    this.selectedFromLocation === '' ? this.fromSelected = false : this.fromSelected = true;
    this.selectedToLocation === '' ? this.toSelected = false : this.toSelected = true;
    if (!this.arrivalTimeSelected || !this.exitTimeSelected || !this.fromSelected || !this.toSelected) {
      return false;
    }
    return true;
  }
}
