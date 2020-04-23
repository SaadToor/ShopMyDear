import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UsersService } from '../classes/users.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  _form : FormGroup;

  constructor(private menu: MenuController, 
              private userServ : UsersService, 
              private router : Router) {}

  ngOnInit() {
    this._form = new FormGroup({
      fullName : new FormControl('', {
        updateOn: 'blur',
        validators : [Validators.required]
      }),
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

  onSubmit(){
    this.userServ.addNewUser(this._form.value.fullName, this._form.value.email, this._form.value.password, false).subscribe(() => {
      this.router.navigate(['../login']);
    })
  }

}
