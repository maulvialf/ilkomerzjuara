import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/marty-avatar.png',
          name: 'Iyang Wibowo'
        },
        date: 'November 22, 2018',
        image: 'assets/img/db (2).jpg',
        content: 'Selamat kepada departemenku yang tercinta!',
      },
      {
        user: {
          avatar: 'assets/img/sarah-avatar.png.jpeg',
          name: 'Sutinah'
        },
        date: 'November 21, 2018',
        image: 'assets/img/db (1).jpg',
        content: 'Padahal saya maunya yang rasa sambal matah, tapi gaada.'
      },
      {
        user: {
          avatar: 'assets/img/ian-avatar.png',
          name: 'Dr. Faldie Solace'
        },
        date: 'November 20, 2018',
        image: 'assets/img/db (3).jpg',
        content: 'Anjay.'
      }
    ];

  }
}