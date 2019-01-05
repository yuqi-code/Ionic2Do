import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { TaskListPage } from '../pages/tasklist/tasklist';

export const firebaseConfig = {
  apiKey: "AIzaSyDtgg1wSgvD0MuBAIjQL49VRCiYKlJQxJI",
  authDomain: "ionic2do-d44c3.firebaseapp.com",
  databaseURL: "https://ionic2do-d44c3.firebaseio.com",
  projectId: "ionic2do-d44c3",
  storageBucket: "ionic2do-d44c3.appspot.com",
  messagingSenderId: "316823412008"
};

@NgModule({
  declarations: [
    MyApp,
    TaskListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TaskListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
