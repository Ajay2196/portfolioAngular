import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../shared-module/shared-services/app-state.service';

@Component({
  selector: 'aj-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnDestroy {
isDev : any;
  constructor(public router :Router, private appStateServ : AppStateService) {
   }
  ngOnDestroy(): void {
    this.appStateServ.appMode.unsubscribe();
  }

  ngOnInit(): void {
    this.appStateServ.appMode.subscribe((value: boolean) =>{
      this.isDev=value;
    });
  }

}
