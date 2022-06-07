import { Component, OnInit } from '@angular/core';
import { AuthRouteService } from './services/auth-route.service';
import { HttpService } from './services/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private http : HttpService){

  }

  ngOnInit(): void {
   
   
  }
  

}
