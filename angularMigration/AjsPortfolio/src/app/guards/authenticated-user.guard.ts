import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthRouteService } from '../services/auth-route.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedUserGuard implements CanActivate {
  constructor(private router: Router, private authServ : AuthService,private authRouteServ : AuthRouteService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.authRouteServ._previousRoute.next("/createBlog");
    if( this.authServ.getToken()){
      return true;
    } 
    else { this.router.navigate(['login']);
    return false;

  }
  }
}
