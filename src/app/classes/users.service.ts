import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { tap,map, take } from 'rxjs/operators'; 
import { BehaviorSubject } from 'rxjs';

interface dataFromFB{
  admin: boolean,
  email: string,
  fullName: string,
  logedIn: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private _users = new BehaviorSubject<User>(new User('','','',false));

get user(){ return this._users.asObservable(); }

  constructor(private http:HttpClient) {}

  addNewUser(fullName : string, email : string, password : string, admin : boolean){
    const newUser = new User(fullName,email,password, admin);
    return this.http.post('https://cutomers-f511b.firebaseio.com/users.json', {... newUser})
    .pipe(tap(resData => { console.log(resData); } ));
  }

  getUser(email : string, password : string){
    return this.http.get<{[key:string]: dataFromFB}>('https://cutomers-f511b.firebaseio.com/users.json').
    pipe(
      map(resData => {
        let user : User;
        for(const key in resData){
          if(resData.hasOwnProperty(key)){
            if(resData[key].email === email && resData[key].password === password){
              user = new User(resData[key].fullName, resData[key].email, resData[key].password, resData[key].admin);
              user.logedIn = true;
              return user;
            }
          }
        }
      }),
      tap(users => { this._users.next(users); })
    );
  }


}
