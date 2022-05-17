import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ul-buddies',
  templateUrl: './ul-buddies.component.html',
  styleUrls: ['./ul-buddies.component.scss']
})
export class UlBuddiesComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
  }

}
