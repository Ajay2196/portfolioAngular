import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uxprojects',
  templateUrl: './uxprojects.component.html',
  styleUrls: ['./uxprojects.component.scss']
})
export class UXProjectsComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
  }

  navigateURL(url:string){
    this.router.navigate([url]);
  }
}
