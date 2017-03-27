import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsDetailPage } from '../pages/news-detail/news-detail';
import { NewsService } from '../providers/news-service';

let componentsArray: Array<any> = [
  MyApp,
  HomePage,
  NewsDetailPage
];

@NgModule({
  declarations: componentsArray,
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: componentsArray,
  providers: [
    StatusBar,
    SplashScreen,
    NewsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
