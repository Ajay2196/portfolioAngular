import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.scss']
})
export class CreateBlogPostComponent implements OnInit,OnDestroy {
  subscription: Subscription | undefined;

  constructor(private http : HttpService) { }
  htmlContent : string ="";
  categories:any[]  = [{id:1, category: "General"}, {id:2, category : "Technical"}];
  title : string ="";
  category : string ="";
  ngOnDestroy(): void {
   if(this.subscription) this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  } 
  createPost(){
    var item ={
      title : this.title,
      category: this.category,
      post : this.htmlContent,  
      time : new Date()
    }

  this.subscription=  this.http.CreatePost(item).subscribe(e=>{
      if(e.success){
        console.log("success!");
        this.category = "";
        this.htmlContent="";
        this.title = "";
        }
    });
  }

}
