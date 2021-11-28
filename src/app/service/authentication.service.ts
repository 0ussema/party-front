import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import {User} from '../interface/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  host2: string = "http://localhost:8881";
  jwt : string;
  username: string;
  roles:Array<string>;
  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post(this.host2+ "/login",data,{observe: 'response'})
  }

  register(data){
    return this.http.post(this.host2+ "/register",data,{observe: 'response'})
  }

  saveToken(jwt : string){
    localStorage.setItem('token',jwt);
    this.jwt =jwt;
    this.parseJwt()
  }

  parseJwt(){
   const helper = new JwtHelperService(this.jwt);
   const objJwt = helper.decodeToken(this.jwt);
   this.username=objJwt.sub;
   this.roles=objJwt.roles;
   console.log("admin" +this.isAdmin());
   console.log("user"+this.isUser());
  }

  isAdmin(){
    return this.roles.indexOf('ADMIN')>=0;
  }
  isUser(){
    return this.roles.indexOf('USER')>=0;
  }

  isAuthenticated(){
    return this.roles && (this.isAdmin() || this.isAdmin());
  }

  laodToken(){
    this.jwt= localStorage.getItem('token');
    this.parseJwt();
  }
}
