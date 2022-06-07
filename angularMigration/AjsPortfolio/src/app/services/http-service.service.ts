import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { Params } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private authServ : AuthService) { }

  authenticateUser(user:any) {
    // now returns an Observable of Config
    return this.http.post<any>(environment.baseURL+environment.authenticate,user);
  }
  CreatePost(item:any){
    let authToken = this.authServ.getToken();
    let header= new HttpHeaders().set('Content-Type','application/json').set('setAuthHeaders','');
    return this.http.post<any>(environment.baseURL+environment.createPosts,item,{headers:header});
  }
  GetPostsByCategory(param:Params){;
  return this.http.get(environment.baseURL+environment.getPostByCategory,{params:param}).pipe(catchError(error=>{ return throwError(()=> error)}));
  }
  GetPostById(param:Params){;
    return this.http.get(environment.baseURL+environment.getPostById,{params:param}).pipe(catchError(error=>{ return throwError(()=> error)}));
    }
  uploadImg(date:string,form : FormData){
    return this.http.post(environment.baseURL+environment.postImgFile+"?v="+date,form);
  }
}
