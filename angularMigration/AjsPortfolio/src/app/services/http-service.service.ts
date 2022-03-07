import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  authenticateUser(user:any) {
    // now returns an Observable of Config
    return this.http.post<any>(environment.baseURL+environment.authenticate,user);
  }
  CreatePost(item:any){
    return this.http.post<any>(environment.baseURL+environment.createPosts,item);
  }
  GetPostsByCategory(param:Params){;
  return this.http.get(environment.baseURL+environment.getPostByCategory,{params:param}).pipe(catchError(error=>{ return throwError(()=> error)}));
  }
  GetPostById(param:Params){;
    return this.http.get(environment.baseURL+environment.getPostById,{params:param}).pipe(catchError(error=>{ return throwError(()=> error)}));
    }
  
}
