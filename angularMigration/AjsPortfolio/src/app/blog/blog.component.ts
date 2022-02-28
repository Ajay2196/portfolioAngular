import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  public blogPosts : Observable<any>[] = [];

  constructor() {
 
   }

  ngOnInit(): void {
  }

}
