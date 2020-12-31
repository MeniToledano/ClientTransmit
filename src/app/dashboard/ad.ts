import {Request} from '../my-requests/request';
import {User} from '../registration/user';
import {AdData} from '../services/server-model/ad-response.model';

export class Ad {
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

  constructor() {
  }

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

  get _title(): string {
    return this.title;
  }

  set _title(value: string) {
    this.title = value;
  }

  get _description(): string {
    return this.description;
  }

  set _description(value: string) {
    this.description = value;
  }

  get _volunteerData(): User {
    return this.volunteerData;
  }

  set _volunteerData(value: User) {
    this.volunteerData = value;
  }

  static plainToClass(adData: AdData): Ad {
    const ad = new Ad();
    ad._adId = adData.adId;
    ad._user = User.plainToClass(adData.user);
    ad._userId = adData.userId;
    ad._title = adData.title;
    ad._description = adData.description;
    ad._status = adData.status;
    ad._request = Request.plainToText(adData.route);
    ad._adLastModifiedDate = adData.updateDateTime;
    if (adData.volunteerData) {
      ad._volunteerData = User.plainToClass(adData.volunteerData);
    }
    return ad;
  }

  static arrPlainToClass(adsJson: AdData[]): Ad[] {
    return adsJson.map(ad => (Ad.plainToClass(ad)));
  }
}
