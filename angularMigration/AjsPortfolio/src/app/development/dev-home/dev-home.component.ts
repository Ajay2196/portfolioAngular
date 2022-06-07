import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from 'src/app/shared-module/shared-services/app-state.service';

@Component({
  selector: 'app-dev-home',
  templateUrl: './dev-home.component.html',
  styleUrls: ['./dev-home.component.scss']
})
export class DevHomeComponent implements OnInit {

  constructor(public router : Router) {
    
   }

  ngOnInit(): void {
  }

  navigateURL(url:string){
    url=='blog'? this.router.navigate(['/blogTitles'],{queryParams : { category:'Technical' }}) : this.router.navigate([url]);
    }
  
}
