import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageManagerService {

  constructor() {
  }


  getData(key: string): string {

    if (window.localStorage) {
      return localStorage.getItem(key);
    } else {
      alert('local storage inaccessible!');
    }
  }

  setData(key: string, value: string): void {
    if (window.localStorage) {
      localStorage.setItem(key, value);
    } else {
      alert('local storage inaccessible!');
    }
  }

  deleteData(key: string): void {
    localStorage.removeItem(key);

  }

  initialize(key: string): string {

    if (window.localStorage) {
      if (localStorage.length > 0) {
        if (localStorage.getItem(key)) {
          return this.getData(key);
        } else {
          this.setData(key, '');
        }
      }
    }
    return '';
  }
}
