import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



import { LoginPage } from '../login/login';

@Component({
  selector: 'page-date',
  templateUrl: 'date.html'
})
export class DatePage {
  user: any;
  userReady: boolean = false;

  constructor(public navCtrl: NavController) {}
 


  ionViewDidLoad() {
    let env = this;
    env.userReady = true;
  }

}
