import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { AdoptPage } from '../pages/adopt/adopt'
import { ReportPage } from '../pages/report/report';
import { RefugesPage } from '../pages/refuges/refuges'
import { ProfilePage } from '../pages/profile/profile'
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';



export interface PageInterface {
  nombre: string;
  page?: any;
  index: number;
  icon: string;
  color: string;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  @ViewChild('content') nav: Nav;

  //Página principal, en este caso la pagina de inicio
  rootPage: any = HomePage;

  indice: number;

  paginas: PageInterface[] = [
    { nombre: "Inicio",  page: HomePage, index: 0, icon: 'home', color:"primary"},
    { nombre: "Adoptar",  page: AdoptPage, index: 1, icon: 'bookmark', color:"cyan"},
    { nombre: "Reportar",  page: ReportPage, index: 2, icon: 'camera', color:"danger"},
    { nombre: "Refugios",  page: RefugesPage, index: 3, icon: 'apps', color:"teal" },
    { nombre: "Perfil",  page: ProfilePage, index: 4, icon: 'person', color:"purple"},

  ]

    ajustes: Array<{nombre: string, page: any, icon: string}>

    


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.ajustes = [
        {nombre: 'Configuración', page: SettingsPage, icon: 'home'},
        {nombre: 'Acerca de', page: AboutPage, icon: 'home'}

      ]

      statusBar.styleDefault();
      splashScreen.hide();

    
    });
  }

 
  goToPage(pagina: any){
    this.nav.setRoot(pagina);
  
  }

 /* setColor(){

    
    if( === 0){
      return 'primary';
    }
    if(index === 1){
      return 'cyan';
    }
    if(index === 2){
      return 'danger';
    }
    if(index === 3){
      return 'teal';
    }
    if(index === 4){
      return 'purple';
    }
  }*/

  /*goToPageTwo(page: PageInterface): void {
    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
      
    }

    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    }
    else {
      this.nav.setRoot(page.page, params)
    }

    this.indice = page.index;
  }


  /*isActive(page: PageInterface): string {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }

    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.page) {
      return 'primary';
    }

  }*/

}
