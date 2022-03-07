import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username:string ="";
  password:string="";
  constructor(private http: HttpService, private router :Router) { }

  ngOnInit(): void {
  }

  authenticateMe(){
    let userData={
      username: this.username,
      password: this.password
    }
    this.http.authenticateUser(userData).subscribe(user =>{
      if(user.success){
        sessionStorage.setItem('isAJLoggedIn', user.user.id);
        this.router.navigate(['/home']);
      }
    })
  }

}
