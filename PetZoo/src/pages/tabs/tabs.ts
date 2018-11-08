import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ReportPage } from '../report/report';
import { ProfilePage } from '../profile/profile';
import { AdoptPage } from '../adopt/adopt';
import { RefugesPage } from '../refuges/refuges';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AdoptPage;
  tab3Root = ReportPage;
  tab4Root = RefugesPage;
  tab5Root = ProfilePage;

  myIndex: number;

  public rootPage : any; 
  color: string = "primary";

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.myIndex = navParams.data.tabIndex || 0;
    //this.rootPage = HomePage;
  }

  selectHome(){
    this.color = "primary";
  }

  selectAdopt(){
    this.color = "cyan";
  }

  selectReport(){
    this.color = "danger";
  }

  selectRefuges(){
    this.color = "teal";
  }

  selectProfile(){
    this.color = "purple";
  }
}