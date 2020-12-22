import {EventEmitter, Injectable, Output} from '@angular/core';
import {Ad} from '../dashboard/ad';
import {HttpReqService} from './http-req.service';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  @Output() userAds: EventEmitter<Ad[]> = new EventEmitter<Ad[]>();
  @Output() allAds: EventEmitter<Ad[]> = new EventEmitter<Ad[]>();
  @Output() pendingAds: EventEmitter<Ad[]> = new EventEmitter<Ad[]>();
  @Output() adDeleted: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() adAdded: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private httpReqService: HttpReqService) {
  }

  addAd(ad: Ad): void {
    this.httpReqService.setUserAds(ad).subscribe(
      (response: Ad) => {
        this.adAdded.emit(true);
      },
      (error) => {
        this.handleError(error);
      });
  }

  getUserAds(userId: string): void {
    this.httpReqService.getUserAds(userId).subscribe(
      (response: Ad[]) => {
        this.userAds.emit(response);
      },
      (error) => {
        this.handleError(error);
      });
  }

  getAllAdsByStatus(status: string): void {
    this.httpReqService.getAdsByStatus(status).subscribe(
      (response: Ad[]) => {
        this.pendingAds.emit(response);
      },
      (error) => {
        this.handleError(error);
      });
  }

  getAllAds(): void {
    this.httpReqService.getAds().subscribe(
      (response: Ad[]) => {
        this.allAds.emit(response);
      },
      (error) => {
        this.handleError(error);
      });
  }

  deleteAd(userId: string, adId: string): void {
    this.httpReqService.deleteAd(userId, adId).subscribe(
      (response: boolean) => {
        if (response === true) {
          this.adDeleted.emit(true);
        }
      },
      (error) => {
        this.handleError(error);
        this.adDeleted.emit(false);
      });
  }

  onUpdateStatus(status: string, adId: string): void {
    this.httpReqService.updateAdStatus(status, adId).subscribe(
      (response: string) => {
        if (response === null || response === undefined) {
          console.log(response);
        } else {
          if (response === 'Status updated!') {
            console.log('ad updated successfully');
          }
        }
      },
      (error) => {
        this.handleError(error);
      });
  }

  handleError(error): void {
    if (error != null) {
      if (error.status === 404) {
        console.log(error);
        console.log('not found');
      } else {
        console.log(error);
        console.log('error');
      }
    }
  }

}
