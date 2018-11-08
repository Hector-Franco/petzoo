import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from'../list/list';

@Component({
  selector: 'page-adopt',
  templateUrl: 'adopt.html'
})
export class AdoptPage {

  constructor(public navCtrl: NavController) {

  }

  

  goToList(){
    this.navCtrl.setRoot(ListPage);
  }

}
