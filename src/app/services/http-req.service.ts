import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../registration/user';
import {Observable} from 'rxjs';
import {Request} from '../my-requests/request';
import {map} from 'rxjs/operators';

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
        let user = new User();
        let userFromResponse = response.User;
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
        let user = new User();
        let userFromResponse = response.User;
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

  setUserRequestedRoutes(routes: Request[], userId: string): Observable<any>{
    this.tempUrlString = this.BASE_URL + '/user/' + userId + '/routes';
    console.log(this.tempUrlString);
    return this.http.post(this.tempUrlString, routes);
  }
}

