import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { MyProductsPage } from '../my-products/my-products';
import { Service } from '../../service/service.service';
import { Storage } from '@ionic/storage';

export interface PageInterface{
	title:string;
	pageName:any;
	tabComponent?:any;
	index?:number;
	icon:string;
}

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  rootPage = TabsPage;
	username;
	@ViewChild(Nav) nav: Nav;
	pages: PageInterface[] = [
		{title:'MyProducts', pageName:MyProductsPage, icon:'shuffle'}
		
	]

  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  public service: Service,
			  public storage: Storage) {
			 
			  this.storage.get('user').then((data) => {
				this.username = data;
			  })
			  
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openPage(page: PageInterface){
    //let params = {};
  
      this.nav.setRoot(page.pageName);
    }

  isActive(page: PageInterface){
    //again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
    
    if(childNav){
      if(childNav.getSelected() && childNav.getSelected().root === page.tabComponent){
        return 'primary';
      }
      return;
    }
    
    // Fallback needed when is no active childnav (tabs not active)
    if(this.nav.getActive() && this.nav.getActive().name === page.pageName){
      return 'primary';
    }
    return;
    
    }

}
