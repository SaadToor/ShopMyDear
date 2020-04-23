import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageService } from '../classes/storage.service';
import { User } from '../classes/user.model';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ShirtsService } from '../classes/shirts.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.page.html',
  styleUrls: ['./account-information.page.scss'],
})
export class AccountInformationPage implements OnInit {

  currentUser : User;
  fullName : string = '';
  email : string = '';
  finish : boolean = false;
  isAdmin : boolean;
  _form : FormGroup;

  constructor(private menu: MenuController,
            private storage : Storage,
            private storageServ : StorageService,
            private shrtServ : ShirtsService,
            private router : Router) { 
              this.storageServ.Done.subscribe(done => {
                if(done){
                  console.log('done here is ' + done);
                  this.finish = done;
                  this.getLogedInUser();
                  console.log(this.currentUser);
                }
              });
            }

  ngOnInit() {
    this._form = new FormGroup({
      title : new FormControl('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
      price : new FormControl('',{
        updateOn:'blur',
        validators :[Validators.required]
      }),
      description : new FormControl('',{
        updateOn:'blur',
        validators :[Validators.required]
      })
      ,
      imageLink : new FormControl('',{
        updateOn:'blur',
        validators :[Validators.required]
      })
    });
   }

  getLogedInUser(){
    this.storage.get('currentUser').then((val) => {
      this.currentUser = val;
      this.isAdmin = this.currentUser.admin;
      this.email = this.currentUser.email;
      this.fullName = this.currentUser.fullName;
      console.log(this.currentUser);
      console.log(this.isAdmin);
    });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  onSubmit(){
    console.log("Title : " + this._form.value.title + 
    "Price : " + this._form.value.price + 
    "Desc : " + this._form.value.description + 
    "ImageLink : " + this._form.value.imageLink);
    this.shrtServ.addNewShirt(this._form.value.title,this._form.value.price, this._form.value.description, this._form.value.imageLink).subscribe();
  }

}
