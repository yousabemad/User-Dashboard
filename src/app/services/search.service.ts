import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchIDChanged: EventEmitter<string> = new EventEmitter<string>();
  searchID: string = '';

  constructor() { }

  setSearchID(searchID: string) {
    // Update searchID
    this.searchID = searchID;

    // Emit the change
    this.searchIDChanged.emit(searchID);
  }
}
