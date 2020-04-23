import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UsersService } from '../classes/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../classes/user.model';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StorageService } from '../classes/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  _user : User;
  _form : FormGroup;
  done : false;

  constructor(private menu: MenuController, 
    private userServ : UsersService, 
    private router : Router,
    private storage : Storage,
    private storageServ : StorageService) { 
      this.storageServ.Done.subscribe();
     }

  ngOnInit() {
    this.userServ.user.subscribe(user => {
      this._user = user;
    });

    this._form = new FormGroup({
      email : new FormControl('',{
        updateOn:'blur',
        validators :[Validators.required]
      }),
      password : new FormControl('',{
        updateOn:'blur',
        validators :[Validators.required]
      })
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  //routerLink='../home'

  onSubmit(){
    this.userServ.getUser(this._form.value.email, this._form.value.password).subscribe(()=>{
      if(this._user.logedIn){
        this.storage.remove('currentUser').then(st => {
          console.log("set new user ", this._user);
          this.storage.set('currentUser', this._user).then(user => {
            this.storageServ.storageFinished();
          });
        })
        
        this.router.navigate(['../home']);
      }
    });

    console.log(this._form.value.email + ' ' + this._form.value.password);
  }
}
