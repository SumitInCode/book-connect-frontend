import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {ApiRequestService} from './api-request.service';
import {JwtToken, Login} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiRequestService = inject(ApiRequestService);
  private isLoggedInData = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInData.asObservable();

  login(loginPayload: Login): Observable<JwtToken> {
    return this.apiRequestService.login(loginPayload).pipe(
      tap((token: JwtToken) => {
        this.setToken('accessToken', token.accessToken);
        this.setToken('refreshToken', token.refreshToken);
        console.log("Came here");
        this.isLoggedInData.next(true);
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  refreshToken(): Observable<JwtToken | null> {
    const refreshToken = this.getToken('refreshToken');
    if(!refreshToken) {
      return of(null);
    }
    return this.apiRequestService.getAccessToken(refreshToken).pipe(
      map((token: JwtToken) => {
        this.setToken('accessToken', token.accessToken);
        this.setToken('refreshToken', token.refreshToken);
        return token;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  private setToken(tokenType: string, token: string) {
    localStorage.setItem(tokenType, token);
  }

  private getToken(tokenType: string): string | null {
    return localStorage.getItem(tokenType);
  }

  private removeToken(tokenType: string) {
    localStorage.removeItem(tokenType);
  }

  logout() {
    this.removeToken('accessToken');
    this.removeToken('refreshToken');
    this.isLoggedInData.next(false);
  }
}
