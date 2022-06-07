import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token:string){
  localStorage.setItem("token",token);
  }

  getToken(){
   return localStorage.getItem('token'); 
  }

  clearToken(){
    localStorage.clear();
  }
}

