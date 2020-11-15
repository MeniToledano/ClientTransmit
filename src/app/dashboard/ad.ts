import {Request} from '../my-requests/request';
import {User} from '../registration/user';
import {AdData, AdsResponse} from '../services/server-model/ad-response.model';

export class Ad {
  get _adId(): string {
    return this.adId;
  }

  set _adId(value: string) {
    this.adId = value;
  }
  get _request(): Request {
    return this.route;
  }

  set _request(value: Request) {
    this.route = value;
  }

  get _user(): User {
    return this.user;
  }

  set _user(value: User) {
    this.user = value;
  }

  get _adLastModifiedTime(): string {
    return this.adLastModifiedTime;
  }

  set _adLastModifiedTime(value: string) {
    this.adLastModifiedTime = value;
  }

  get _adLastModifiedDate(): string {
    return this.adLastModifiedDate;
  }

  set _adLastModifiedDate(value: string) {
    this.adLastModifiedDate = value;
  }
  get _userId(): string {
    return this.userId;
  }

  set _userId(value: string) {
    this.userId = value;
  }

  get _status(): string {
    return this.status;
  }

  set _status(value: string) {
    this.status = value;
  }
  set _title(value: string) {
    this.title = value;
  }
  get _title(): string {
    return this.title;
  }

  get _description(): string {
    return this.description;
  }
  set _description(value: string) {
    this.description = value;
  }
  constructor() {
  }
  private static ad: Ad;
  private static ads: Ad[];
  private adId: string;
  private userId: string;
  private status: string;
  private title: string;
  private description: string;
  private route: Request;
  private user: User;
  private adLastModifiedTime: string;
  private adLastModifiedDate: string;
  private volunteerData: User;

  static plainToClass(ad: AdData): Ad {
    this.ad = null;
    this.ad = new Ad();
    this.ad._adId = ad.adId; // here i have a problem?!!?
    this.ad._user = User.plainToClass(ad.user);
    this.ad._userId = ad.userId;
    this.ad._title = ad.title;
    this.ad._description = ad.description;
    this.ad._status = ad.status;
    this.ad._request = Request.plainToText(ad.route);
    this.ad._adLastModifiedDate = ad.updateDateTime;
    return this.ad;
  }

  static arrPlainToClass(adsJson: AdData[]): Ad[]{
   this.ads = [];
   adsJson.forEach(ad => this.ads.push(Ad.plainToClass(ad)));
   return this.ads;
  }
}
