import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject } from 'rxjs';
import { PaginationParams, User, UserId, Users } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userIDSubject = new Subject<UserId>();
  userID$: Observable<UserId> = this.userIDSubject.asObservable();
  private _userID!: UserId;

  constructor(private apiService: ApiService) { }

  get userID(): UserId {
    return this._userID;
  }

  set userID(value: UserId) {
    this._userID = value;
    this.userIDSubject.next(value);
  }

  getUsers(url: string, params: PaginationParams): Observable<Users> {
    return this.apiService.get(url, {
      params,
      responseType: 'json'
    });
  }

  getUserById(url: string, params: { id: number }): Observable<UserId> {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  }
}
