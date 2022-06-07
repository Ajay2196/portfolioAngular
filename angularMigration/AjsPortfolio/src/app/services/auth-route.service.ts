import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterEvent } from '@angular/router';
import { BehaviorSubject, filter, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthRouteService {
_previousRoute : Subject<string> = new Subject<string>();
currentRoute : string = "";
  constructor(private router:Router) {
    this.router.events.pipe(filter(events=> events instanceof NavigationStart)).subscribe( (e : any) =>{
      console.log(e.url)
      this._previousRoute.next(this.currentRoute);
      this.currentRoute = e.url
    });
   }
}
