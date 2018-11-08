import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {

  image: string = null;

  constructor(public navCtrl: NavController, private camera: Camera) {

  }


  //Función para tomar la foto con un boton
  public takePicture(){
    
    let options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100
    }

    this.camera.getPicture(options).then(ImageData => {
      this.image = 'data:image/jpeg;base64,${imageData}';
    }).catch(error => {
      console.error(error);
    });
  }
}
