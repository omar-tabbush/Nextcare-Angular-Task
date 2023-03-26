import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post('https://dummyjson.com/auth/login', {
      username: username,
      password: password,
      expiresInMins: 6660,
    });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    const token: any = (localStorage.getItem('token') as string) || null;
    if (token) {
      const decodedToken: any = jwt_decode(token);
      if (decodedToken.exp * 1000 > Date.now()) {
        return true;
      } else {
        console.log('token is expired');
        localStorage.clear();
        return false;
      }
    } else return false;
  }
}
