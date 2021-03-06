import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VisionPage } from '../pages/vision/vision';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { Camera } from '@ionic-native/camera';

const firebaseConfig = {
  apiKey: 'AIzaSyAt8wjKO0zriCBnZa7IM09L8hUfMmC7csE',
  authDomain: 'visionapp-8606f.firebaseapp.com',
  databaseURL: 'https://visionapp-8606f.firebaseio.com',
  projectId: 'visionapp-8606f',
  storageBucket: 'visionapp-8606f-hotdog',
  messagingSenderId: '268519562614'
};

@NgModule({
  declarations: [MyApp, HomePage, VisionPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, VisionPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera
  ]
})
export class AppModule {}
