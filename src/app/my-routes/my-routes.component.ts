import {Component, OnInit} from '@angular/core';
import {NewRouteDialogComponent} from './new-route-dialog/new-route-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Route} from './route';
import {RouteService} from '../services/route.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-my-routes',
  templateUrl: './my-routes.component.html',
  styleUrls: ['./my-routes.component.css']
})
export class MyRoutesComponent implements OnInit {

  routes: Route[] = [];

  constructor(public dialog: MatDialog,
              private routeService: RouteService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.routeService.getUserRoutes(this.userService.user._userId);
    this.routeService.userRoutes.subscribe((routes: Route[]) => {
      this.routes = routes;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewRouteDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.routes.push(result);
        this.routeService.setUserRoutes(this.userService.user._userId, this.routes);
      }
    });
  }

  deleteFromList(index: number): void {
    this.routeService.deleteRoutes(this.routes.splice(index, 1)[0]._routeId);
  }
}
