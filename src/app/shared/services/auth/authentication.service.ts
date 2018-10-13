import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppGlobals } from '../../../global';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticationState = new BehaviorSubject(null);
  headers;

  constructor(private storage: Storage, private plt: Platform, private global: AppGlobals, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.checkToken();
    });
  }

  setToken(data) {
    console.log('setToken', data.token)
    return this.storage.set(TOKEN_KEY, data.token).then(res => {
      localStorage.setItem('name', data.user.name);
      this.headers = { headers: new HttpHeaders().set('token', data.token) };
      this.authenticationState.next(true);
    });
  }

  login(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/normal`, data);
  }

  register(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/users`, data);
  }

  facebook(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/facebook`, data);
  }

  google(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/google`, data);
  }

  updateUser(id, data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/user/${id}`, data);
  }

  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      this.headers = { headers: new HttpHeaders().set('token', res) };
      if(res) {
        this.authenticationState.next(true);
      } else {
        this.authenticationState.next(false);
      }
    });
  }

  async getToken() {
    return await this.storage.get(TOKEN_KEY);
  }

}
