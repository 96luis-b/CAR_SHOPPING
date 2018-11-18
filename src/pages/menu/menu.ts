import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MyProductsPage } from '../my-products/my-products';
import { ConfigPage } from '../config/config';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  @ViewChild(Nav) nav:Nav;
  rootPage: any = TabsPage;
  pages: Array<{title: string, component: any, icon: string}>;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pages = [
      {title: 'Configuraciones', component: ConfigPage, icon:'add'},
      {title: 'Mis Productos', component: MyProductsPage, icon:'add'}
      //{title: 'Configuracion', component: ConfigPage, icon:'add'}
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(page){
    console.log( page.component)
    console.log("nextPage:    " + page.title)
      this.nav.push(page.component);
    }

}
