import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  postId: Params;
  blogPost : any;
  error = null;
  constructor(private http : HttpService, private route : ActivatedRoute, public router : Router,private sanitizer : DomSanitizer) {
    this.postId = this.route.snapshot.queryParams;

   }

  ngOnInit(): void {
    this.http.GetPostById(this.postId).subscribe( {next: (posts)=> {this.blogPost = posts;
    this.blogPost.post = this.sanitizer.bypassSecurityTrustHtml(this.blogPost.post);
    }, error : (error)=>{this.error = error; console.log("lol error :" + error.message)}})
  }
  navigate(){
    this.router.navigate(['/blogTitles'],{queryParams : { category:this.blogPost.category }})

  }
}
