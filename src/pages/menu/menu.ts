import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MyProductsPage } from '../my-products/my-products';
import { ConfigPage } from '../config/config';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

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


  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  public alertCtrl: AlertController,
			  public storage: Storage) {
    this.pages = [
	  {title: 'Mis Productos', component: MyProductsPage, icon:'ios-list-outline'},
      {title: 'Configuraciones', component: ConfigPage, icon:'settings'}
														//cog
														//construct
														//settings
      //{title: 'Configuracion', component: ConfigPage, icon:'add'}
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  
	  Alert(){
        let alert = this.alertCtrl.create({
            title:"¿Estas seguro?",
            buttons: [
			   {
				text:"Si", 
				handler: ()=>{
					console.log("se cerrara la sesion");
					this.storage.clear().then(() => {});
					this.navCtrl.setRoot(HomePage)
					}
			   },
				{
				text:"Cancelar",
				handler: ()=>{
					console.log("Cancelado");						
				}
			}
			]
        });
        alert.present();
    }
  
  
  
  openPage(page){
      this.nav.push(page.component);
    }

	logOut(){
		this.Alert();
	}
	
	
}
