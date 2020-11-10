import { Injectable } from '@angular/core';
import {Ad} from '../dashboard/ad';
import {HttpReqService} from './http-req.service';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  ads: Ad[] = [];
  constructor(private httpReqService: HttpReqService,
              private userService: UserService) { }

  addAd(ad: Ad): void {
    this.ads.push(ad);
    this.httpReqService.setUserAds(ad);
  }
}
