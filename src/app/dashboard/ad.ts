import {Request} from '../my-requests/request';
import {User} from '../registration/user';

export class Ad {
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
  private adId: string;
  private userId: string;
  private status: string;
  private title: string;
  private description: string;
  private route: Request;
  private user: User;
  private adLastModifiedTime: string;
  private adLastModifiedDate: string;
  private createDateTime: string; // test for the request
  private updateDateTime: string; // test for the request
  private volunteerData: User;

}
