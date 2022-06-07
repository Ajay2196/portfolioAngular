import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from '../services/http-service.service';

@Component({
  selector: 'app-create-blog-post',
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.scss']
})
export class CreateBlogPostComponent implements OnInit,OnDestroy {
  subscription: Subscription | undefined;
  editorConfig: AngularEditorConfig ={
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    sanitize : false,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
    upload: (file : File) : any => {
     const form = new FormData;
     form.append('blogImg',file);
      return this.http.uploadImg(Date.now().toString(),form);
    },
    // uploadUrl: ()=>{}
  }
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
