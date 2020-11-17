import {Request} from '../../my-requests/request';
import {User} from '../../registration/user';
import {UserData} from './user-response.model';
import {RouteData} from './route-response.model';

export interface AdData {
   adId: string;
   userId: string;
   status: string;
   title: string;
   description: string;
   route: RouteData;
   user: UserData;
   createDateTime: string;
   updateDateTime: string;
   volunteerData: User;
}

export interface AdResponse {
  ad: AdData;
}

export interface AdsResponse {
  ads: AdData[];
}

