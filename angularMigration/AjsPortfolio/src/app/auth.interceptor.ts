import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError,tap, map, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


  constructor(private authServ :AuthService,private router : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // request.clone()
    const token = this.authServ.getToken();
    if(token && request.headers.has('setAuthHeaders')){
      const clone = request.clone({
        headers: request.headers.append("Authorization",token)
        
      });
     return next.handle(clone)
    }
    else return next.handle(request);
  }
}
