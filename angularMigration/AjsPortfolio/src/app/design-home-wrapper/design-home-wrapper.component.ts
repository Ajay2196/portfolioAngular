import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../shared-module/shared-services/app-state.service';

@Component({
  selector: 'app-design-home-wrapper',
  templateUrl: './design-home-wrapper.component.html',
  styleUrls: ['./design-home-wrapper.component.scss']
})
export class DesignHomeWrapperComponent implements OnInit {

  constructor(public router : Router, private appStateServ : AppStateService) {
    sessionStorage.setItem('isDev',JSON.stringify(false));
    this.appStateServ.appMode.next(false);
    this.router.navigate(['home']);

   }
  ngOnInit(): void {
  }

}
