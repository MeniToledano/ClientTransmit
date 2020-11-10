import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../registration/user';
import {Observable, Subscription} from 'rxjs';
import {Request} from '../my-requests/request';
import {map} from 'rxjs/operators';
import {Ad} from '../dashboard/ad';

@Injectable({
  providedIn: 'root'
})
export class HttpReqService {
  BASE_URL = 'http://localhost:8080';
  tempUrlString: string;

  constructor(private http: HttpClient) {
  }

  postUser(user: User): Observable<any> {
    this.tempUrlString = this.BASE_URL + '/user';
    return this.http.post<any>(this.tempUrlString, user).pipe(
      map((response) => {
        const user = new User();
        const userFromResponse = response.User;
        user._lastName = userFromResponse.lastName;
        user._email = userFromResponse.email;
        user._firstName = userFromResponse.firstName;
        user._password = userFromResponse.password;
        user._userName = userFromResponse.userName;
        user._phone = userFromResponse.phone;
        user._userId = userFromResponse.userId;
        return user;
      })
    );
  }

  getUser(user: User): Observable<any>{
    this.tempUrlString = this.BASE_URL + '/user';
    return this.http.post<any>(this.tempUrlString, user).pipe(
      map((response) => {
        const user = new User();
        const userFromResponse = response.User;
        user._lastName = userFromResponse.lastName;
        user._email = userFromResponse.email;
        user._firstName = userFromResponse.firstName;
        user._password = userFromResponse.password;
        user._userName = userFromResponse.userName;
        user._phone = userFromResponse.phone;
        user._userId = userFromResponse.userId;
        return user;
      })
    );
  }

  setUserAds(ad: Ad): Subscription{
    this.tempUrlString = this.BASE_URL + '/ads';
   // console.log(this.http.post<Ad>(this.tempUrlString, ad));
    // const data: Object = ad;
    console.log(JSON.stringify(ad));
    return this.http.post<any>(this.tempUrlString, ad).subscribe(data =>
    console.log(data));
    //    .pipe(
    //    map((response) => {
    //      let ad = new Ad();
    //     let user = new User();
    //     let userFromResponse = response.user;
    //      let routeFromResponse = response.route;
    //      ad._request = new Request(routeFromResponse.routeId,
    //        routeFromResponse.toLocation,
    //        routeFromResponse.fromLocation,
    //        routeFromResponse.exitTime,
    //        routeFromResponse.arrivalTime);
    //      ad._status = response.status;
    //      ad._description = response.description;
    //      ad._title = response.title;
    //      ad._userId = response.userId;
    //      user._lastName = userFromResponse.lastName;
    //      user._email = userFromResponse.email;
    //      user._firstName = userFromResponse.firstName;
    //      user._password = userFromResponse.password;
    //      user._userName = userFromResponse.userName;
    //      user._phone = userFromResponse.phone;
    //      user._userId = userFromResponse.userId;
    //      ad._user = user;
    //      return ad;
    //   })
    // );
  }
}

