import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  isLogin$ = new Subject<boolean>();
  show(): void{
    this.isLogin$.next(true);
  }
  hide(): void {
    this.isLogin$.next(false);
  }

  private apiUri: string = "https://expensable-api.herokuapp.com"
  
  constructor(
    private http: HttpClient,
  ) { }

  login(credentials: any) {
    return this.http.post(`${this.apiUri}/login`, credentials)
  }
}
