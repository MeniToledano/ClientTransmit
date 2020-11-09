import {Component, OnInit} from '@angular/core';
import {Request} from './request';
import {MatDialog} from '@angular/material/dialog';
import {NewRequestDialogComponent} from './new-request-dialog/new-request-dialog.component';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  requests: Request[] = [new Request(null, 'I need to move a fridge form a to b', 'Ashdod', 'TLV', 'I need to move the fridge,' +
    ' its located at 3rd floor and needs to be moved to tel aviv at first floor. There’s an elevator, but it wont fit.', 'PENDING'),
    new Request(null, 'need to move microwave from c to d ', 'Ramat-Gan', 'Eilat', 'I need to move the fridge,' +
      ' its located at 3rd floor and needs to be moved to tel aviv at first floor. There’s an elevator, but it wont fit.', 'PENDING')];

  constructor(public dialog: MatDialog,
              private requestService: RequestService) {
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewRequestDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.requests.push(result);
        this.requestService.updateRoutes(this.requests);
      }
    });
  }

  onClickDelete(index: number): void {
    this.requests.splice(index, 1);
    this.requestService.updateRoutes(this.requests);
  }
}

