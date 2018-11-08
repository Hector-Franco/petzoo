import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-refuges',
  templateUrl: 'refuges.html'
})

export class RefugesPage {


  //Array de refugios disponibles
  refugios = [];

  constructor(public navCtrl: NavController, params: NavParams, public actionSheetCtrl: ActionSheetController) {


    //Inicialización de los objetos tipo refugio con todos sus datos
    this.refugios = [
      {
        'nombre': 'Zoonosis',
        'ciudad': 'Bogotá D.C',
        'distancia': '2.6 km',
        'calificacion': '4.0',
        'email': 'zoonosis@gmail.com',
        'tel':'3145286970',
        'mapa': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.3943265186927!2d-74.12873168456463!3d4.701362996585225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ca9a3fa2da7%3A0xdd05477cbcde923f!2sCentro+de+Zoonosis+de+Bogot%C3%A1+D.C.+-+Secretar%C3%ADa+Distrital+de+Salud!5e0!3m2!1sen!2sco!4v1536709235661'
      },
      {
        'nombre': 'Refugio Perro Amor',
        'ciudad': 'Cota, Cundinamarca',
        'distancia': '8.6 km',
        'calificacion': '3.9',
        'email': 'perro-amor@gmail.com',
        'tel':'3167519477',
        'mapa': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15904.1968483571!2d-74.1367517302246!3d4.761447000000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8377d54f1ad1%3A0x5b86ddd5f3053326!2sFundacion+Perro+Amor!5e0!3m2!1sen!2sco!4v1536715108004'
      },
      {
        'nombre': 'ALCATRAZ',
        'ciudad': 'Bogotá D.C',
        'distancia': '2.6 km',
        'calificacion': '4.5',
        'email': 'alcatraz@gmail.com',
        'mapa': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46302.1878888426!2d-74.15589179540518!3d4.758494444551251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b1437f7e31d0132!2sAlCATRAZ!5e0!3m2!1sen!2sco!4v1536715202935'
      },
      {
        'nombre': 'Fundación Bigotes',
        'ciudad': 'Funza, Cundinamarca',
        'distancia': '21.6 km',
        'calificacion': '3.2',
        'email': 'fundacion-bigotes@gmail.com',
        'tel':'3057749351',
        'mapa': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63624.99714246669!2d-74.14525469864577!3d4.671821824229857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x52c8c093a9e55324!2sFundacion+Bigotes!5e0!3m2!1sen!2sco!4v1536715367591'
      },    
      {
        'nombre': 'Mascotas Traviesas',
        'ciudad': 'Bogotá D.C',
        'distancia': '15.6 km',
        'calificacion': '3.6',
        'email': 'mascotas-traviesas@gmail.com',
        'tel':'3138256497',
        'mapa': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44992.63467747194!2d-74.13028360162944!3d4.625341422032372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4bc9e20bb9bbeccf!2sVeterinaria+Mascotas+Traviesas!5e0!3m2!1sen!2sco!4v1536715989625'
      }
    ]
  }

  //Función para abrir el contacto de cada uno de los refugios
  async openContact(refugio: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      title: 'Contactar ' + refugio.nombre,
    
      buttons: [
        {
          text: `Email ( ${refugio.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + refugio.email);
          }
        },
        {
          text: `Llamar ( ${refugio.tel} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + refugio.tel);
          }
        }
      ]
    });

    await actionSheet.present();
  }

}
