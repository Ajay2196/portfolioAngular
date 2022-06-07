import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppStateService } from '../shared-module/shared-services/app-state.service';

@Injectable({
  providedIn: 'root'
})
export class DevDesignNavigationGuard implements CanActivate {
isDevMode : boolean;
  constructor(private appStateServ : AppStateService, private router : Router){
    this.isDevMode= appStateServ.appMode.getValue();
    appStateServ.appMode.subscribe(val=>{
      this.isDevMode=val;
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.isDevMode)  {
        return true;
      } else{
        this.router.navigate(['dev']);
        return false;
      }
  }
  
}
