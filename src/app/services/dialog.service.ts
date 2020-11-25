import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogRequestComponent} from '../my-requests/request/dialog-request/dialog-request.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {
  }

  openModal(title: string, message: string, yes: () => void): any {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      title,
      message
    };
    dialogConfig.minWidth = 400;
    dialogConfig.maxWidth = 400;


    const dialogRef = this.dialog.open(DialogRequestComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (yes) {
          yes();
        }
      }
    });
  }
}
