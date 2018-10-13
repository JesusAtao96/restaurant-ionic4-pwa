import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../auth/authentication.service';

import { AppGlobals } from '../../../global';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {


  constructor(private storage: Storage, private plt: Platform, private global: AppGlobals, private http: HttpClient, private authS: AuthenticationService) {

  }

  getRestaurants(): Observable<any> {
    return this.http.get(`${this.global.baseAppUrl}/restaurants`, this.authS.headers);
  }

  getRestaurantXId(id): Observable<any> {
    return this.http.get(`${this.global.baseAppUrl}/restaurants/${id}`, this.authS.headers);
  }

  createRestaurant(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/restaurants`, data, this.authS.headers);
  }

  updateRestaurant(id, data): Observable<any> {
    return this.http.put(`${this.global.baseAppUrl}/restaurants/${id}`, data, this.authS.headers);
  }

  deleteRestaurant(id): Observable<any> {
    return this.http.delete(`${this.global.baseAppUrl}/restaurants/${id}`, this.authS.headers);
  }

  getCommentsXId(id): Observable<any> {
    return this.http.get(`${this.global.baseAppUrl}/comments/${id}`, this.authS.headers);
  }

  createComment(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/comments`, data, this.authS.headers);
  }
}
