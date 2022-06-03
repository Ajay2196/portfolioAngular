import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../shared-module/shared-services/app-state.service';

@Component({
  selector: 'aj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router : Router, private appStateServ : AppStateService) {
    sessionStorage.setItem('isDev',JSON.stringify(false));
    this.appStateServ.appMode.next(false);
   }

  ngOnInit(): void {
  }

  navigateURL(url:string){
    this.router.navigate([url]);
  }
}
