import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-hoodies',
  templateUrl: './hoodies.page.html',
  styleUrls: ['./hoodies.page.scss'],
})
export class HoodiesPage implements OnInit {

  constructor(private menu: MenuController) {}

  ngOnInit() {}

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
