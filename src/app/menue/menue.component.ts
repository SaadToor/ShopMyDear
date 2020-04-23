import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageService } from '../classes/storage.service';
import { User } from '../classes/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.scss'],
})
export class MenueComponent implements OnInit {

  currentUser : User;
  logedIn : boolean = false;
  finish : boolean = false;

  constructor(private storage : Storage,
    private storageServ : StorageService,
    private router : Router) { 
      this.storageServ.Done.subscribe(done => {
        if(done){
          console.log('done here is ' + done);
          this.finish = done;
          this.isUserLogedIn();
        }
      });
      console.log("The length of the storage is " + this.storage.length());
    }

  ngOnInit() {  }

  isUserLogedIn(){
    this.storage.get('currentUser').then((val) => {
      console.log('Your Values are ', val);
      this.currentUser = val;
      console.log(this.currentUser);
      this.logedIn = this.currentUser.logedIn;
    });
  }

  userLogedOut(){
    this.storage.clear().then(() => {
      console.log("logging user out ");
      this.logedIn = false;
      this.router.navigate(['../home']);
    });
    console.log("user is logged out"); 
  }

}
