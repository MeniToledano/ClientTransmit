import {Component, OnInit} from '@angular/core';
import {RequestComponent} from './request/request.component';
import {Request} from './request';
import {MatDialog} from '@angular/material/dialog';
import {NewRequestDialogComponent} from './new-request-dialog/new-request-dialog.component';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
   requests: Request[] = [new Request( 'I need to move a fridge form a to b',  'Ashdod',  'TLV',  'I need to move the fridge,' +
       ' its located at 3rd floor and needs to be moved to tel aviv at first floor. There’s an elevator, but it wont fit.'),
     new Request( 'need to move microwave from c to d ',  'Ramat-Gan',  'Eilat',  'I need to move the fridge,' +
         ' its located at 3rd floor and needs to be moved to tel aviv at first floor. There’s an elevator, but it wont fit.')];
   constructor(public dialog: MatDialog) {
   }
  ngOnInit(): void {}
  openDialog(): void {
    const dialogRef = this.dialog.open(NewRequestDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.requests.push(result);
      }
    });
  }

  onClickDelete(index: number): void {
    this.requests.splice(index, 1);
  }
}

