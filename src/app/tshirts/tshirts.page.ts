import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Shirt } from '../classes/shirt.model';
import { ShirtsService } from '../classes/shirts.service';
import { Storage } from '@ionic/storage';
import { StorageService } from '../classes/storage.service';
import { User } from '../classes/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tshirts',
  templateUrl: './tshirts.page.html',
  styleUrls: ['./tshirts.page.scss'],
})
export class TShirtsPage implements OnInit {
  currentUser : User;
  logedIn : boolean = false;
  finish : boolean = false;
  listOfShirt : Shirt[] = [];
  listOfSelectedShirts : Shirt[] = [];
  isLoading = false;

  constructor(private menu: MenuController, 
    private shrtSev : ShirtsService,
    private storage : Storage,
    private storageServ : StorageService,
    private router : Router) {
      this.storageServ.Done.subscribe(done => {
        if(done){
          console.log('done here is ' + done);
          this.finish = done;
          this.isUserLogedIn();
        }
      });
    }

  ngOnInit() {
    this.shrtSev.shirts.subscribe((shirtsData : Shirt[]) => {
      this.listOfShirt = shirtsData;
    });
  }

  ionViewWillEnter(){
    this.isLoading = true;
    this.shrtSev.getShirts().subscribe(() =>  {
      this.isLoading = false;
    });
  }

  addToCart(selectedShirt : any){
    this.listOfSelectedShirts.push(selectedShirt);

    // this.storage.remove('currentUser').then(st => {
    //   console.log("set new user ", this.userShoppingCart);
    //   this.storage.set('currentUser', this.userShoppingCart).then(user => {
    //     this.storageServ.storageFinished();
    //   });
    // })
  }
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  isUserLogedIn(){
    this.storage.get('currentUser').then((val) => {
      console.log('Your Values are ', val);
      this.currentUser = val;
      console.log(this.currentUser);
      this.logedIn = this.currentUser.logedIn;
    });
  }

  register(){
    this.router.navigate(['../register']);
  }

  login(){
    this.router.navigate(['../login']);
  }

}
