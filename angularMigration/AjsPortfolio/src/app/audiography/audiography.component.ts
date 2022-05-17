import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-audiography',
  templateUrl: './audiography.component.html',
  styleUrls: ['./audiography.component.scss']
})
export class AudiographyComponent implements OnInit {

  constructor( public router : Router) { }

  ngOnInit(): void {
  }

}
