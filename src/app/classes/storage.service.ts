import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _Done = new BehaviorSubject<boolean>(false) ;

  get Done(){
    return this._Done.asObservable();
  }
  constructor() { }

  storageFinished(){
    this._Done.next(true);

  }
}
