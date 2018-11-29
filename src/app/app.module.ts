import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from '../pages/menu/menu';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

import { MyProductsPage } from '../pages/my-products/my-products';
import { ProfilePage } from '../pages/profile/profile';
import { DetailProductPage } from '../pages/detail-product/detail-product';
import { ConfigPage } from '../pages/config/config';
import { MyDataPage } from '../pages/my-data/my-data';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { DetailProductCatalogPage } from '../pages/detail-product-catalog/detail-product-catalog';
import { CommentProductPage } from '../pages/comment-product/comment-product';

import { HttpClientModule } from '@angular/common/http';
import { HttpProvider } from '../providers/http/http';
import { Service } from '../service/service.service';
import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    MyProductsPage,
    ProfilePage,
    TabsPage,
    MenuPage,
    DetailProductPage,
    ConfigPage,
    MyDataPage,
    DetailProductCatalogPage,
    CommentProductPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    DashboardPage,
    MyProductsPage,
    ProfilePage,
    TabsPage,
    MenuPage,
    DetailProductPage,
    ConfigPage,
    MyDataPage,
    DetailProductCatalogPage,
    CommentProductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider,
    Service
  ]
})
export class AppModule {}
