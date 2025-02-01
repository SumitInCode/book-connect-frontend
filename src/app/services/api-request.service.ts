import { inject, Injectable } from '@angular/core';
import { JwtToken, Login, Register } from '../models/auth.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private http = inject(HttpClient);
  private LOGIN_URL = '/api/v1/auth/authenticate';
  private REFRESH_URL = '/api/v1/auth/refresh-token';
  private REGISTER_URL = '/api/v1/auth/register';

  login(loginPayload: Login): Observable<JwtToken> {
    return this.http.post<JwtToken>(this.LOGIN_URL, loginPayload);
  }

  getAccessToken(refreshToken: string): Observable<JwtToken> {
    return this.http.get<JwtToken>(this.REFRESH_URL, {
      params: { refreshToken }
    });
  }

  register(registerPayload: Register): Observable<unknown> {
    return this.http.post<unknown>(this.REGISTER_URL, registerPayload);
  }
  

}
