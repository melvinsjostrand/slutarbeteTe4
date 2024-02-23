import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocalStorageService } from './local-storage-service.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';


import { LoginModel } from '../models/loginModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/SingleResponseModel';
import { TokenModel } from '../models/tokenModel';
import { registerModel } from '../models/registerModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Url="https://localhost:7063/";

  constructor(
    private httpClient:HttpClient,
    private router: Router,
    private jwtHelper: JwtHelperService,
    private localStorage:LocalStorageService
  ) { }
  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.Url+"login",loginModel)
  }
  register(registerModel:RegisterModel):Observable<SingleResponseModel<TokenModel>>{
    return this.httpClient.post<SingleResponseModel<TokenModel>>(this.Url+"register",registerModel)
  }
  logout() {
    this.localStorage.clear()
    this.onRefresh();
    this.router.navigate(['/Index']);
}

async onRefresh() {
  this.router.routeReuseStrategy.shouldReuseRoute = function () { return false }
  const currentUrl = this.router.url + '?'
  return this.router.navigateByUrl(currentUrl).then(() => {
    this.router.navigated = false
    this.router.navigate([this.router.url])
  })
}
}
