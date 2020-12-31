import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ad} from './ad';
import {User} from '../registration/user';
import {AdService} from '../services/ad.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  ad: Ad;
  user: User;
  ads: Ad[] = [];
  showLoader = true;
  subscription: Subscription[] = [];

  constructor(private adService: AdService) {
  }

  ngOnInit(): void {
    this.setLoader();
    this.adService.getAllAdsByStatus('PENDING');
    const sub1 = this.adService.pendingAds.subscribe((data: Ad[]) => {
      // this.showLoader = false;
      this.ads = data;
    });
    this.subscription.push(sub1);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((subscription) => subscription.unsubscribe());
  }

  private setLoader(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

}
