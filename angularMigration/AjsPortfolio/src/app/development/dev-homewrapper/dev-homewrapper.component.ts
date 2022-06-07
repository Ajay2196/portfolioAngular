import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/shared-module/shared-services/app-state.service';

@Component({
  selector: 'app-dev-homewrapper',
  templateUrl: './dev-homewrapper.component.html',
  styleUrls: ['./dev-homewrapper.component.scss']
})
export class DevHomewrapperComponent implements OnInit {


  constructor(public router : Router, private appStateServ : AppStateService) {

    let promise = new Promise((resolve)=>{
      sessionStorage.setItem('isDev',JSON.stringify(true));
      this.appStateServ.appMode.next(true);
     
      this.router.navigate(['dev']);
    })

    


   }

  ngOnInit(): void {
  }



}
