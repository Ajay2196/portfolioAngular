import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-farmwise',
  templateUrl: './farmwise.component.html',
  styleUrls: ['./farmwise.component.scss']
})
export class FarmwiseComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit(): void {
  }

  download(){
    var link = document.createElement("a");
        link.download = "FarmWise_caseStudy";
        link.href = "../../assets/FarmWise.pdf"
        link.click();
  }
}
