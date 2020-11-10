import {Component, OnInit} from '@angular/core';
import {Request} from './request';
import {MatDialog} from '@angular/material/dialog';
import {NewRequestDialogComponent} from './new-request-dialog/new-request-dialog.component';
import {AdService} from '../services/ad.service';
import {Ad} from '../dashboard/ad';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  ads: Ad[] = [];
  ad1: Ad;
  ad: Ad;
  object: Object;

  constructor(public dialog: MatDialog,
              private adService: AdService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.ad1 = new Ad();
    this.ad1._request = new Request(null,
      'Raanana',
      'Ashdod',
      '08:00',
      '07:00');
    this.ad1._adLastModifiedDate = null;
    this.ad1._adLastModifiedTime = null;
    this.ad1._user = null;
    this.ad1._status = 'PENDING';
    this.ad1._description = 'I need to move the fridge, its located at 3rd floor and needs to be moved to tel. There’s an elevator';
    this.ad1._title = 'big long title';
    this.ads.push(this.ad1);
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
        this.ad._user = this.userService.user;
        this.ad._userId = this.userService.user._userId;
        this.ads.push(this.ad);
        this.object = this.ad;
        this.adService.addAd(this.ad);
      }
    });
  }

  onClickDelete(index: number): void {
    this.ads.splice(index, 1);
    // this.adService.addAs(this.ads);
  }
}

