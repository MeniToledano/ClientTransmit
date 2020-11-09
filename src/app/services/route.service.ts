import { Injectable } from '@angular/core';
import {HttpReqService} from './http-req.service';
import {User} from '../registration/user';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private httpReqService: HttpReqService) {
  }

}
