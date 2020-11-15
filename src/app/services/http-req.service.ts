import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from '../registration/user';
import {Observable, Subscription} from 'rxjs';
import {Request} from '../my-requests/request';
import {map} from 'rxjs/operators';
import {Ad} from '../dashboard/ad';
import {UserData, UserResponse} from './server-model/user-response.model';
import {AdData, AdResponse, AdsResponse} from './server-model/ad-response.model';
import {RouteResponse} from './server-model/route-response.model';
import {Route} from '../my-routes/route';

@Injectable({
  providedIn: 'root'
})
export class HttpReqService {
  BASE_URL = 'http://localhost:8080';
  tempUrlString: string;
  ads: Ad[] = [];

  constructor(private http: HttpClient) {
  }
// on registration
  postUser(user: User): Observable<User> {
    this.tempUrlString = this.BASE_URL + '/user';
    return this.http.post<UserResponse>(this.tempUrlString, user).pipe(
      map((response) => {
        return User.plainToClass(response.user);
      })
    );
  }

  // on login - need to add on server side dedicated login api
  getUser(user: User): Observable<User>{ // this need to be replace with new API
    this.tempUrlString = this.BASE_URL + '/user';
    return this.http.post<UserResponse>(this.tempUrlString, user).pipe(
      map((response: UserResponse) => {
        return User.plainToClass(response.user);
      })
    );
  }

  // on add request
  setUserAds(ad: Ad): Observable<Ad>{
    this.tempUrlString = this.BASE_URL + '/ads';
    return this.http.post<AdResponse>(this.tempUrlString, ad).pipe(
      map( (response: AdResponse) => {
        return Ad.plainToClass(response.ad);
      })
    );
  }

  // get user requests
  getUserAds(userId: string): Observable<Ad[]>{
    this.tempUrlString = this.BASE_URL + '/user/' + userId + '/ads';
    return this.http.get<AdsResponse>(this.tempUrlString).pipe(
      map((response: AdsResponse) => {
        if (response === undefined){
          console.log('Get User Ads response is undefined');
          return [];
        }
        if (response.ads.length > 0){
          return Ad.arrPlainToClass(response.ads);
        }
        return [];
        })
    );
  }

  // get all ads
  getAds(): Observable<Ad[]>{
    this.tempUrlString = this.BASE_URL + '/ads';
    return this.http.get<AdsResponse>(this.tempUrlString).pipe(
      map((response: AdsResponse) => {
        if (response === undefined){
          console.log('Get User Ads response is undefined');
          return [];
        }
        console.log(response);
        if (response.ads.length > 0){
          return Ad.arrPlainToClass(response.ads);
        }
        return [];
      })
    );
  }
  // get user routes
  getUserRoutes(userId: string): Observable<Route[]> {
    this.tempUrlString = this.BASE_URL + '/user/' + userId + '/routes';
    return this.http.get<RouteResponse>(this.tempUrlString).pipe(
      map((response: RouteResponse) => {
        if (response === undefined){
          console.log('Get User Ads response is undefined');
          return [];
        }
        if (response.routes.length > 0){
          return Route.arrPlainToClass(response.routes);
        }
        return [];
      })
    );
  }

  setUserRoutes(userId: string, routes: Route[]): Observable<Route[]> {
    this.tempUrlString = this.BASE_URL + '/user/' + userId + '/routes';
    return this.http.post<RouteResponse>(this.tempUrlString, routes).pipe(
      map((response: RouteResponse) => {
        if (response === undefined){
          console.log('Get User Ads response is undefined');
          return [];
        }
        if (response.routes.length > 0){
          return Route.arrPlainToClass(response.routes);
        }
        return [];
      })
    );
  }


  deleteRoutes(routeId: string): Observable<Route[]>  {
    this.tempUrlString = this.BASE_URL + '/user/1/routes/' + routeId;
    return this.http.delete<RouteResponse>(this.tempUrlString).pipe(
      map((response: RouteResponse) => {
        if (response === undefined){
          console.log('Get User Ads response is undefined');
          return [];
        }
        if (response.routes.length > 0){
          return Route.arrPlainToClass(response.routes);
        }
        return [];
      })
    );
  }

  deleteAd(userId: string, adId: string): Observable<boolean> {
    this.tempUrlString = this.BASE_URL + '/user/' + userId + '/ads/' + adId;
    return this.http.delete<Response>(this.tempUrlString).pipe(
      map((response: Response) => {
        if (response === undefined){
          console.log('in delete ad');
          return false;
        }
        if (response.status === 200){
          return true;
        }
      })
    );
  }
}

