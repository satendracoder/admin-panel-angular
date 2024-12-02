import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { AuthapiService } from '../../services/auth/authapi/authapi.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { retry, catchError, throwError } from 'rxjs';
import { LocalStorage } from '../../constants/constant';

export const authinterceptorInterceptor: HttpInterceptorFn = (req, next) => {

const _AuthService = inject(AuthapiService);
  const _router = inject(Router);
  const myAccessToken = sessionStorage.getItem(LocalStorage.accessToken);
  const myAccessTokenLoca = sessionStorage.getItem(LocalStorage.accessToken);
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myAccessToken}`
    }
  });
  return next(authReq).pipe(
    retry(2),
    catchError((e:HttpErrorResponse)=>{
      if(e.status===401){
        sessionStorage.removeItem(LocalStorage.accessToken);
        _router.navigate(["/"])
      }

      const error = e.error.message || e.statusText;
      return throwError(()=> error);
    })
  );
};
