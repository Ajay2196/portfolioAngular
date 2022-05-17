import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-art',
  templateUrl: './digital-art.component.html',
  styleUrls: ['./digital-art.component.scss']
})
export class DigitalArtComponent implements OnInit {

  constructor(public router : Router) { }
  
  ngOnInit(): void {
  }

}
