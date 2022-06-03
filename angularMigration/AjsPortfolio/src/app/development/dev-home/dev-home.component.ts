import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/shared-module/shared-services/app-state.service';

@Component({
  selector: 'app-dev-home',
  templateUrl: './dev-home.component.html',
  styleUrls: ['./dev-home.component.scss']
})
export class DevHomeComponent implements OnInit {

  constructor(public router : Router, private appStateServ : AppStateService) {
    sessionStorage.setItem('isDev',JSON.stringify(true));
   }

  ngOnInit(): void {
    this.appStateServ.appMode.next(true);
  }

  navigateURL(url:string){
    this.router.navigate([url]);
  }

  
}
