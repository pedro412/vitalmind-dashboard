import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(user: User): Observable<any> {
    return this.http.post(
      'https://vimind-3526e.uc.r.appspot.com/auth/login',
      user
    );
  }

  logout(): void {
    this.router.navigate(['/login']);
  }

  getTokenFromLocalStorage(): string {
    return localStorage.getItem('access_token');
  }

  removeAccessTokenFromLocalStorage(): void {
    localStorage.removeItem('access_token');
  }

  setAcessTokenOnLocalStorage(token: string): void {
    localStorage.setItem('access_token', token);
  }
}
