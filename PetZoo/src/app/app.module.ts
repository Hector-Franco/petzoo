import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ReportPage } from '../pages/report/report';
import { ProfilePage } from '../pages/profile/profile';
import { RefugesPage } from '../pages/refuges/refuges';
import { AdoptPage } from '../pages/adopt/adopt';
import { SettingsPage } from '../pages/settings/settings';
import { ListPage } from'../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ReportPage,
    AdoptPage,
    RefugesPage,
    ProfilePage,
    ListPage,
    SettingsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ReportPage,
    AdoptPage,
    RefugesPage,
    ProfilePage,
    ListPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
