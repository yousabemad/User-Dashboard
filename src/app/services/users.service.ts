import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams, User, UserId, Users } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private apiService:ApiService
  ) { }

userID!:UserId;

  getUsers = (url:string , params:PaginationParams):Observable<Users> =>{
    return this.apiService.get(url , {
      params,
    responseType: 'json'
    })
  }

  getUserById = (url: string, params: { id: number }): Observable<UserId> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }
  
}
