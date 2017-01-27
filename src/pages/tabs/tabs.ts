import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { DatePage } from '../date/date';
import { MatchPage } from '../match/match';
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root: any = ProfilePage;
  tab2Root: any = DatePage;
  tab3Root: any = MatchPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
