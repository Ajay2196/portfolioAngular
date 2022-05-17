import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videography',
  templateUrl: './videography.component.html',
  styleUrls: ['./videography.component.scss']
})
export class VideographyComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

}
