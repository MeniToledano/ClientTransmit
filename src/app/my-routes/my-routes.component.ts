import {Component, OnInit} from '@angular/core';
import {NewRouteDialogComponent} from './new-route-dialog/new-route-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Route} from './route';

@Component({
  selector: 'app-my-routes',
  templateUrl: './my-routes.component.html',
  styleUrls: ['./my-routes.component.css']
})
export class MyRoutesComponent implements OnInit {

  routes: Route[] = [];

  constructor(public dialog: MatDialog) {
    this.routes.push(new Route('Ashdod', 'TLV', '09:00', '10:00'));
    this.routes.push(new Route('Ashdod', 'TLV', '09:00', '10:00'));
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewRouteDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.routes.push(result);
      }
    });
  }

  deleteFromList(index: number): void {
    this.routes.splice(index, 1);
  }
}
