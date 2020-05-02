import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from './userdetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {
  private _userurl = "assets/data/users.json";
  constructor(private http: HttpClient) { }

  getUsers(): Observable<IUsers[]>{
    return this.http.get<IUsers[]>(this._userurl);
  }

  
}
