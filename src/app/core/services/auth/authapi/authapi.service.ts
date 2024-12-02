import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { APIEndPoint, LocalStorage } from '../../../constants/constant';
import { ApiResponse, LoginPayload, User } from '../../../models/interfaces/auth/User';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  isLoggedIn = signal<boolean>(false);
  _http = inject(HttpClient);
  constructor() { }


  loginUser(payload: LoginPayload) {
    return this._http
      .post<ApiResponse<User>>(`${APIEndPoint.AUTH.Login}`, payload, httpOptions)
      .pipe(
        map((response) => {
          if (response.statusCode) {
            sessionStorage.setItem(LocalStorage.accessToken, response.data.accessToken);
            localStorage.setItem(LocalStorage.accessToken, response.data.accessToken);
            this.isLoggedIn.update(() => true);
            sessionStorage.setItem("Admin", response.data.user.designation);
             localStorage.setItem("Admin", response.data.user.designation);
          }
          return response.data;
        })
      );
  }
}
