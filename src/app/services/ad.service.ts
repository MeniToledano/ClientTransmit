import {EventEmitter, Injectable, Output} from '@angular/core';
import {Ad} from '../dashboard/ad';
import {HttpReqService} from './http-req.service';
import {UserService} from './user.service';
import {User} from '../registration/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  ads: Ad[] = [];
  @Output() userAds: EventEmitter<Ad[]> = new EventEmitter<Ad[]>();
  @Output() allAds: EventEmitter<Ad[]> = new EventEmitter<Ad[]>();
  @Output() routeDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() adAdded: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private httpReqService: HttpReqService,
              private userService: UserService) { }

  addAd(ad: Ad): void {
    this.httpReqService.setUserAds(ad).toPromise().then(
      (response: Ad) => {
        this.adAdded.emit(true);
      },
      (error) => {
        if (error.status === 404) {
          return 'not found';
        }else {
          console.log(error);
        }
      });
  }

  getUserAds(userId: string): void {
    this.httpReqService.getUserAds(userId).toPromise().then(
      (response: Ad[]) => {
        this.userAds.emit(response);
      },
      (error) => {
        if (error.status === 404) {
          return 'not found';
        }else {
          console.log(error);
          return 'error';
        }
      });
  }

  getAllAds(): void{
    this.httpReqService.getAds().toPromise().then(
      (response: Ad[]) => {
        this.allAds.emit(response);
      },
      (error) => {
        if (error.status === 404) {
          return 'not found';
        }else {
          console.log(error);
          return 'error';
        }
      });
  }

  deleteAd(userId: string, adId: string): void {
    this.httpReqService.deleteAd(userId, adId).toPromise().then(
      (response: boolean) => {
        if (response === true){
          this.routeDeleted.emit(true);
        }
      },
      (error) => {
        if (error.status === 404) {
          console.log(error);
          console.log( 'not found');
        }else {
          console.log(error);
          console.log('error');
        }
        this.routeDeleted.emit(false);
      });
  }
}
