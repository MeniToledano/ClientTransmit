import {Component, OnInit} from '@angular/core';
import {Request} from './request';
import {MatDialog} from '@angular/material/dialog';
import {NewRequestDialogComponent} from './new-request-dialog/new-request-dialog.component';
import {AdService} from '../services/ad.service';
import {Ad} from '../dashboard/ad';
import {UserService} from '../services/user.service';
import {User} from '../registration/user';
import {ShowVolunteerCredentialsComponent} from './show-volunteer-credentials/show-volunteer-credentials.component';
import {Router} from '@angular/router';

export interface DialogData {
  volunteer: User;
}

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {
  ads: Ad[] = [];
  ad: Ad;
  showLoader = true;

  constructor(public dialog: MatDialog,
              private adService: AdService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    // sets loader until data been fetched
    this.setLoader();

    // reload dialog
    if (this.router.url === '/my-requests/add-request') {
      this.openDialog();
    }

    // reloading the routes
    this.userService.userUpdated.subscribe((user: User) => {
      this.showLoader = false;
      this.adService.getUserAds(user._userId);
    });
    // switching between components // should consider move it to app module
    if (this.userService.getUser() !== undefined) {
      this.adService.getUserAds(this.userService.getUser()._userId);
    }
    this.adService.userAds.subscribe((ads: Ad[]) => {
      this.ads = ads;
    });
    this.adService.adAdded.subscribe((res: boolean) => {
      if (res) {
        this.adService.getUserAds(this.userService.getUser()._userId);
      }
    });
    this.adService.adDeleted.subscribe((isDeleted: boolean) => {
      if (isDeleted) {
        this.adService.getUserAds(this.userService.getUser()._userId);
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
    this.ads[index]._status = status;
    this.adService.onUpdateStatus(status, this.ads[index]._adId);
  }

  statusClicked(index: number): void {
    if (this.ads[index]._status === 'MATCH_FOUND') {
      console.log('a');
      console.log('this.ads[index]._volunteerData.id= ' + (this.ads[index])._adId);
      const dialogRef2 = this.dialog.open(ShowVolunteerCredentialsComponent, {
        width: '400px',
        height: '300px',
        data: {
          volunteer: this.ads[index]._volunteerData
        }
      });
    }
  }

  onClickAddRequest(): void {
    // only navigate when the prev url is /home/my-requests
    if (this.router.url === '/my-requests') {
      location.href = '/my-requests/add-request';
    } else {
      this.openDialog();
    }
  }

  private setLoader(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }
}

