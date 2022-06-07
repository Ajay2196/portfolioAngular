import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRouteService } from '../services/auth-route.service';
import { AuthService } from '../services/auth.service';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username:string ="";
  password:string="";
  authNav:string="";
  constructor(private authServ :AuthService,private http: HttpService, private router :Router, private authRouteServ : AuthRouteService) { }

  ngOnInit(): void {

    this.authRouteServ._previousRoute.subscribe(val=>
      {
        this.authNav=val;
      })
  }

  authenticateMe(){
    let userData={
      username: this.username,
      password: this.password
    }
    this.http.authenticateUser(userData).subscribe(user =>{
      if(user.success){
        sessionStorage.setItem('isAJLoggedIn', user.user.id);
        this.authServ.setToken(user.token);
       this.authNav? this.router.navigate([this.authNav]) : this.router.navigate(['/home']);
      }
    })
  }

}
