import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../environment/environment';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, switchMap, throwError, of } from 'rxjs';

export const BookConnectInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  let modifiedReq = req.clone({
    url: `${environment.apiURL}${req.url.startsWith('/') ? req.url : '/' + req.url}`
  });
  const isProtected = modifiedReq.url.includes('login') || modifiedReq.url.includes('register');
  if (isProtected) {
    return next(modifiedReq);
  }
  
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    console.log(accessToken);
    modifiedReq = addAuthorizationHeader(modifiedReq, accessToken);
  }

  return next(modifiedReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        return authService.refreshToken().pipe(
          switchMap((newToken) => {
            if (newToken) {
              return next(addAuthorizationHeader(req, newToken.accessToken));
            }
            return throwError(() => new Error('Unauthorized: Failed to refresh token'));
          }),
          catchError(() => throwError(() => new Error('Unauthorized: Failed to refresh token after 2 attempts')))
        );
      }
      return throwError(() => error);
    })
  );
};

function addAuthorizationHeader(req: HttpRequest<any>, accessToken: string) {
  return req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`
    }
  });
}
