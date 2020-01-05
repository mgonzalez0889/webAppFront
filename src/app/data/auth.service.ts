import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Oauth} from '@data/interfaces/oauth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login( data: Oauth) {
    return this.http.post('http://webappbackend.test/oauth/token', data );
  }
}
