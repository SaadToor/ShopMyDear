import { Injectable } from '@angular/core';
import { Shirt } from './shirt.model';
import { HttpClient } from '@angular/common/http';
import { tap,map, take } from 'rxjs/operators'; 
import { BehaviorSubject } from 'rxjs';

interface dataFromFB{
  title : string,
  price : number,
  description : string,
  imageLink : string
}

@Injectable({
  providedIn: 'root'
})
export class ShirtsService {

  private _shirts = new BehaviorSubject<Shirt[]>([]);

get shirts(){ return this._shirts.asObservable(); }

  constructor(private http:HttpClient) { }

  getShirt(){
    return this._shirts.asObservable();
  }

  addNewShirt(title : string, price : number, description : string, imageLink : string){
    const newShirt = new Shirt(title, price, description, imageLink);
    return this.http.post('https://shirts-50dac.firebaseio.com/shirts.json', {...newShirt})
    .pipe(tap(resData => { console.log(resData); }));
  }

  getShirts(){
    return this.http.get<{[key:string]: dataFromFB}>('https://shirts-50dac.firebaseio.com/shirts.json').
    pipe(
      map(resData => {
        let shirts = [];
        for(const key in resData){
          if(resData.hasOwnProperty(key)){
            shirts.push(new Shirt(resData[key].title, resData[key].price, resData[key].description, resData[key].imageLink));
          }
        }
        return shirts;
        }
      ),
      tap(shirts => { this._shirts.next(shirts); })
    );
  }
}
