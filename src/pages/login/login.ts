import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Facebook, NativeStorage } from 'ionic-native';

import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  FB_APP_ID: number = 1342637555809523;
  private tabBarElement;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    Facebook.browserInit(this.FB_APP_ID, "v2.8");
    this.tabBarElement = document.querySelector('#tabs ion-tabbar-section');
  }


  doFbLogin() {
    let permissions = new Array();
    let nav = this.navCtrl;

    permissions = ['public_profile'];

    Facebook.login(permissions)
      .then(response => {
        let userId = response.authResponse.userID;
        let params = new Array();

        Facebook.api("/me?fields=name,gender", params)
          .then(user => {
            user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
            NativeStorage.setItem('user',
              {
                user: user
              })
              .then(() => {
                nav.push(TabsPage);
              }, function (error) {
                console.log(error);
              })
          })
      })
      .catch(error => {
        console.log(error);
      })
  }
  onPageDidEnter() {

    this.tabBarElement.style.display = 'none';

  }

  onPageWillLeave() {

    this.tabBarElement.style.display = 'block';

  }

}
