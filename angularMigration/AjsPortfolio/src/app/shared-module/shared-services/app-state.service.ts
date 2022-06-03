import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  appMode :  BehaviorSubject<boolean> = new BehaviorSubject(sessionStorage.getItem('isDev') ? JSON.parse( `{"value": ${sessionStorage.getItem('isDev')}}`).value : false );
  constructor() { }
}
