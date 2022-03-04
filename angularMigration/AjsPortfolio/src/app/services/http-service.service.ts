import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
}
