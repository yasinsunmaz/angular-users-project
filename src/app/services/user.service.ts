import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import * as Constant from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  id:number;
  constructor(private httpClient: HttpClient) { }
  path = Constant.userApiUrl;
  // User List
  getAllUsers(): Observable <User[]> {
    return this.httpClient.get<User[]>(this.path.requestUrl);
  }
  // User Detail
  getUserDetails(id):Observable <User[]>{
    return this.httpClient.get<User[]>(this.path.requestUrl+id);
  }
}
