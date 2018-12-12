import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, LoadingController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  
  // account: { email: string, password: string } = {
  //   email: '',
  //   password: ''
  // };

  // Our translated text strings
  private loginErrorString: string;
  account:any={};
  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public loadCtrl: LoadingController, 
    public translateService: TranslateService) {
    
    this.account.email = "";
    this.account.password = "";
    this.account.response = "";
    this.account.token = "";

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    

  }
  loader(){
    let loader = this.loadCtrl.create({
      content: "Please wait...",
      duration: 1000
    });
    loader.present();
  }
  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
