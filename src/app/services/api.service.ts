import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClint: HttpClient
  ) { }

  get<T> (url:string, option:Options):Observable<T> {
    return this.httpClint.get<T>(url, option) as Observable<T>;
  }



}
