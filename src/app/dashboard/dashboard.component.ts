import {Component, OnInit} from '@angular/core';
import {Ad} from './ad';
import {User} from '../registration/user';
import {AdService} from '../services/ad.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ad: Ad;
  user: User;
  ads: Ad[] = [];
  showLoader = true;

  constructor(private adService: AdService) {
  }

  ngOnInit(): void {
    this.setLoader();
    this.adService.getAllAds();
    this.adService.allAds.subscribe((data: Ad[]) => {
      // this.showLoader = false;
      this.ads = data;
    });
  }

  private setLoader(): void {
    setTimeout(() => {
      this.showLoader = false;
    }, 1000);
  }

}
