import { Injectable } from '@angular/core';
import { LoginUser } from '../models/LoginUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JwtHelperService} from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { Register } from '../models/register';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private httpClient:HttpClient,private router:Router,private alertifyService:AlertifyService,private jwtHelper:JwtHelperService) { }
path = "https://localhost:7087/api/auth/";
userToken:any;
decodedToken:any;
TOKEN_KEY="token";
    login(loginUser:LoginUser)
    {

      let headers = new HttpHeaders();
      headers= headers.append("Content-Type","application/json");
      this.httpClient.post(this.path+"login",loginUser,{headers:headers}).subscribe(data=>{
        this.saveToken(data);
        this.userToken = data;
        this.decodedToken = this.jwtHelper.decodeToken(data.toString());
        this.alertifyService.success("SİSTEME BAŞARIYLA GİRİŞ YAPILDI")
        this.router.navigateByUrl('/project');
      });
    }

    register(registerUser:Register)
    {
      let headers = new HttpHeaders();
      headers= headers.append("Content-Type","application/json");
      this.httpClient.post(this.path+"register",registerUser,{headers:headers}).subscribe(()=>{
        this.alertifyService.success("SİSTEME BAŞARIYLA KAYDOLUNDU");
        this.router.navigateByUrl('/project');

      });
      
    }

    
    saveToken(token:any)
    {
      localStorage.setItem(this.TOKEN_KEY,token)

    }
  
    logOut()
    {
      localStorage.removeItem(this.TOKEN_KEY)
      this.alertifyService.error("SİSTEMDEN ÇIKIŞ YAPILDI!");
    }
     refreshToken =this.jwtHelper.tokenGetter();
     loggedIn(){
      //return tokenNotExpired(this.TOKEN_KEY);
      if (this.jwtHelper.isTokenExpired(this.token)) {
        return false; 
      } else {
        return true;
      }
    }
    get token()
    {
      return localStorage.getItem(this.TOKEN_KEY)!
    }
    getCurrentUserId()
    {
      //return this.jwtHelper.decodeToken(this.token).nameid;
      var base64Url = this.token.split('.')[1];
      var base64 = base64Url.replace('-', '+').replace('_', '/');
      var kt =JSON.parse(window.atob(base64));
      return kt["nameid"];
    }



}
