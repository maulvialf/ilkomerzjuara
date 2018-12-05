import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions, DestinationType } from '@ionic-native/camera';
/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  constructor(public navCtrl: NavController, public camera: Camera, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }
  ionViewWillLeave(){
    
  }
  photo:any;
  take(){
    const options: CameraOptions = {
      quality : 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      //imageData can be a string or a picture file
      // to encode, use base64
      this.photo ='data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log("Error : " + err);
    })
  }
  send(){}
}
