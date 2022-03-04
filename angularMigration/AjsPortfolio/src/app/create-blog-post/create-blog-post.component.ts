import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.scss']
})
export class CreateBlogPostComponent implements OnInit,OnDestroy {

  constructor(private http : HttpService) { }

  ngOnDestroy(): void {
    console.log(this.htmlContent);
  }
  htmlContent : string ="";
  ngOnInit(): void {
  } 

  createPost(){
    var item ={
      post : this.htmlContent,
      time : new Date()
    }
    this.http.CreatePost(item).subscribe(e=>{
      if(e.success){
        console.log("success!");
        }
    })
  }

}
