import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner'
/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {
  options: BarcodeScannerOptions;
  encodeText: string='';
  encodedData: any={};
  scannedData: any={};
  constructor(public navCtrl: NavController, public scanner:BarcodeScanner, public navParams: NavParams) {
  }
  scan(){
    this.options={
      prompt: 'Scan your barcode'
    };
    this.scanner.scan(this.options).then((data) => {
      this.scannedData = data;
    }, (err) => {
      console.log('Error :', err);
    })
  }
  encode(){
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText).then((data)=>{
      this.encodedData = data;
    }, (err) => { 
        console.log("Error :", err);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

}
