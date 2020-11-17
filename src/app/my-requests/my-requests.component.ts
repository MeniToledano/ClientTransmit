import {Component, OnInit} from '@angular/core';
import {Request} from './request';
import {MatDialog} from '@angular/material/dialog';
import {NewRequestDialogComponent} from './new-request-dialog/new-request-dialog.component';
import {AdService} from '../services/ad.service';
import {Ad} from '../dashboard/ad';
import {UserService} from '../services/user.service';
import {User} from '../registration/user';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  ads: Ad[] = [];
  ad: Ad;

  constructor(public dialog: MatDialog,
              private adService: AdService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.adService.getUserAds(this.userService.user._userId);
    this.adService.userAds.subscribe((ads: Ad[]) => {
      this.ads = ads;
    });
    this.adService.routeDeleted.subscribe((isDeleted: boolean) => {
      if (isDeleted){
        this.adService.getUserAds(this.userService.user._userId);
      }
    });
    this.adService.adAdded.subscribe((res: boolean) => {
      if (res){
        this.adService.getUserAds(this.userService.user._userId);
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewRequestDialogComponent, {});

    dialogRef.afterClosed().subscribe((response) => {
      if (response) {
        this.ad = new Ad();
        this.ad._request = new Request(null, response.to, response.from, null, null);
        this.ad._title = response.title;
        this.ad._description = response.description;
        this.ad._status = 'PENDING';
        this.ad._user = new User();
        this.ad._user = this.userService.user;
        this.ad._userId = this.userService.user._userId;
        this.ads.push(this.ad);
        this.adService.addAd(this.ad);
      }
    });
  }

  onClickDelete(index: number): void {
    this.adService.deleteAd(this.userService.user._userId, this.ads.splice(index, 1)[0]._adId);
  }

  updateAdStatus({string: status, number: index}): void {
    this.adService.onUpdateStatus(status, this.ads[index]._adId);
  }
}

