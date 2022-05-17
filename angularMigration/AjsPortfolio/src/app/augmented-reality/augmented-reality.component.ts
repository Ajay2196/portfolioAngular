import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-augmented-reality',
  templateUrl: './augmented-reality.component.html',
  styleUrls: ['./augmented-reality.component.scss']
})
export class AugmentedRealityComponent implements OnInit {

  constructor(public router : Router) { }
  
  ngOnInit(): void {
  }

}
