import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPost : string ="";
  constructor( public router : Router, private http: HttpService) {
 
   }

  ngOnInit(): void {
  }
  navigateURL(str: any){
    this.router.navigate(['/blogTitles'],{queryParams : { category:str }})
  }
}
