import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


import {
  SwingStackComponent,
  SwingCardComponent
} from 'angular2-swing';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { DatePage } from '../pages/date/date';
import { ProfilePage } from '../pages/profile/profile';
import { MatchPage } from '../pages/match/match';
import { TabsPage } from '../pages/tabs/tabs';
import { CardComponent } from '../components/card/card.component';



@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    DatePage,
    TabsPage,
    ProfilePage,
    MatchPage,
    CardComponent,
    SwingStackComponent,
    SwingCardComponent

  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(MyApp, { tabsPlacement: 'top' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    DatePage,
    TabsPage,
    CardComponent,
    ProfilePage,
    MatchPage
  ],

  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
