import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';
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

  constructor(public navCtrl: NavController ,public modalCtrl: ModalController) {
    this.cardItems = [
      {
        name: '[REKOR PRESTASI ILKOMERZ!]',
        date: 'November 22, 2018',
        image: 'assets/img/db (2).jpg',
        content: 'Selamat kepada departemenku yang tercinta!',
      },
      {
        name: '[ILKOMERZ ICE CREAM DAY!]',
        date: 'November 21, 2018',
        image: 'assets/img/db (1).jpg',
        content: 'Padahal saya maunya yang rasa sambal matah, tapi gaada.'
      },
      {
        name: 'Dukung perjuangan mereka!',
        date: 'November 20, 2018',
        image: 'assets/img/db (3).jpg',
        content: 'Anjay.'
      }
    ];
  }
  ionViewDidLoad() {
  }
  
  openItem(item: Item ) {
    this.navCtrl.push('DashboardDetailPage', {
      item: item
    });
  }
}