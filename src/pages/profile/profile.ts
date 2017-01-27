import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NativeStorage } from 'ionic-native';
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  user: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    const env = this;
    NativeStorage.getItem('user')
      .then(data => {
        env.user = {
          name: data.name,
          gender: data.gender,
          picture: data.picture
        };
      }, error => {
        console.log(error);
      });
  }
  showUser(){
    return JSON.stringify(this.user);
  }

}
