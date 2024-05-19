import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchID: string = '';

  constructor() {}

 
    
    private searchIDSubject = new Subject<string>();

  setSearchID(searchID: string): void {
    this.searchID = searchID;
    this.searchIDSubject.next(searchID);
  }

  get searchIDChanged(): Observable<string> {
    return this.searchIDSubject.asObservable();
  }
}

