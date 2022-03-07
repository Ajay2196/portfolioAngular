import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {
  blogPosts : any = [];
  error = null;
  category :Params;
  constructor(private http: HttpService, public router : Router, private route: ActivatedRoute) { 
    this.category = this.route.snapshot.queryParams;
  }

  ngOnInit(): void {
    if(!['General','Technical'].includes(this.category['category'])){
      this.router.navigate(['blog']);
    }
    else{
      this.http.GetPostsByCategory(this.category).subscribe( {next: (posts)=> {this.blogPosts = posts}, error : (error)=>{this.error = error; console.log("lol error :" + error.message)}})

    }

  }
  goToBlogPost(str:string){
    this.router.navigate(['/blogPost'],{queryParams : { postId:str }})
  }
}
