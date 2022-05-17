import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creative-corner',
  templateUrl: './creative-corner.component.html',
  styleUrls: ['./creative-corner.component.scss']
})
export class CreativeCornerComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  navigateURL(url:string){
    this.router.navigate([url]);
  }

}
