import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ReportPage } from '../report/report';
import { AdoptPage } from '../adopt/adopt';
import { RefugesPage } from '../refuges/refuges';
import { ProfilePage } from '../profile/profile';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  cards : Array<{titulo: string,
                 contenido: string, 
                 imagen: string, 
                 pagina?: any, 
                 color: string
                 boton: string
                }>;
  
  constructor(public navCtrl: NavController) {
      
    this.cards = [
      {titulo: 'Adopta un amigo',
       contenido: 'Si eres un humano legible y con principios podrás adoptar un animalito que necesite de tu ayuda y amor Recuerda: adopta, NO compres.',
       imagen: '../../assets/imgs/adopt-pet.jpg',
       pagina: AdoptPage,
       color: 'cyan',
       boton: 'Adopta'
      },

      {titulo: 'Reporta un abusador',
      contenido: 'Cientos de animales son maltratado a diario por personas inescrupulosas  ahora tu tienes el poder de denunciar este flagelo desde tu smartphone.',
      imagen: '../../assets/imgs/animal-abuse.jpg',
      pagina: ReportPage,
      color: 'danger',
      boton: 'Reporta'
      },

      {titulo: 'Refugios cerca a ti',
      contenido: 'Tendrás una lista de los refugios que están en tu ciudad, para que acudas en caso de que lo necesites',
      imagen: '../../assets/imgs/animal-refuge.jpg',
      pagina: RefugesPage,
      color: 'teal',
      boton: 'Refugios'
      },

      {titulo: 'Mira tus logros',
      contenido: 'Al iniciar sesión con tu cuenta verás los logros que has obtenido al ayudar a salvaguardar la vida e integridad de los animales de tu zona.',
      imagen: '../../assets/imgs/profile-card.jpg',
      pagina: ProfilePage,
      color: 'purple',
      boton: 'Perfil'
      },
    ]
  }


  goToPage(pagina: any){
    this.navCtrl.setRoot(pagina);
  }

}
