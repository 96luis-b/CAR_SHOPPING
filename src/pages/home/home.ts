
import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, LoadingController, Nav } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';
import { Storage } from '@ionic/storage';
import { Service } from '../../service/service.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Nav) nav:Nav;
	pruebaSpinner;
  constructor(public navCtrl: NavController,
			  public http: HttpProvider,
			  public storage: Storage,
			  public service: Service) {
			  
			  console.log("se activara la verificacion de sesion");

			this.service.loading.present();
			this.storage.get('user').then((data) => {
			console.log(data)
            if(data!=null){
			  this.service.loading.dismiss();
              this.navCtrl.setRoot(MenuPage);
			  return
            }
			  this.service.loading.dismiss();
		});
		
  }
  
  
  next_LoginPage(){ 
    this.navCtrl.push(LoginPage);
	
  }

}
