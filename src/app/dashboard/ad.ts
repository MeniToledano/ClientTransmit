import {Request} from '../my-requests/request';

export class Ad {
  constructor(private requestt: Request,
              private userNamee: string,
              private userLastNamee: string,
              private adLastModifiedTimee: string,
              private adLastModifiedDatee) {
  }

  get request(): Request {
    return this.requestt;
  }

  get userName(): string {
    return this.userNamee;
  }

  get userLastName(): string {
    return this.userLastNamee;
  }

  get adLastModifiedTime(): string {
    return this.adLastModifiedTimee;
  }

  get adLastModifiedDate(): string {
    return this.adLastModifiedDatee;
  }

}
