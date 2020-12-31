import {Component, OnDestroy, OnInit} from '@angular/core';
import {NewRouteDialogComponent} from './new-route-dialog/new-route-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {Route} from './route';
import {RouteService} from '../services/route.service';
import {UserService} from '../services/user.service';
import {User} from '../registration/user';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-my-routes',
  templateUrl: './my-routes.component.html',
  styleUrls: ['./my-routes.component.css']
})
export class MyRoutesComponent implements OnInit, OnDestroy {

  routes: Route[] = [];
  showLoader = true;
  subscription: Subscription[] = [];
  constructor(public dialog: MatDialog,
              private routeService: RouteService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setLoader();

    // reload dialog after refreshing the page
    if (this.router.url === '/my-routes/add-route') {
      this.openDialog();
    }

    const sub1 = this.userService.userUpdated.subscribe((user: User) => {
      this.showLoader = false;
      this.routeService.getUserRoutes(user._userId);
    });
    if (this.userService.user !== undefined) {
      this.routeService.getUserRoutes(this.userService.user._userId);
    }
    const sub2 = this.routeService.userRoutes.subscribe((routes: Route[]) => {
      this.routes = routes;
    });
    this.subscription.push(sub1);
    this.subscription.push(sub2);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewRouteDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (this.router.url === '/my-routes/add-route') {
        location.href = '/my-routes';
      }
      if (result) {
        this.routes.push(result);
        this.routeService.setUserRoutes(this.userService.user._userId, this.routes);
      }
    });
  }

  deleteFromList(index: number): void {
    this.routeService.deleteRoutes(this.routes.splice(index, 1)[0]._routeId);
  }

  onClickAddRoute(): void {
    // only navigate when the prev url is /home/my-routes
    if (this.router.url === '/my-routes') {
      location.href = '/my-routes/add-route';
    } else {
      this.openDialog();
    }
  }

  private setLoader(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }
}
