import { Service } from '../../service/service.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SessionProvider } from '../../providers/session/session';
import { Storage } from '@ionic/storage';

import { SignupPage } from '../signup/signup';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = {
    username:"",
    password:""
    }

  active:Boolean  = true;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
			  public http: SessionProvider,
              public service: Service,
			  public storage: Storage,
			  public loadingCtrl: LoadingController
              ) { 
				
			  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
	this.service.loadingSpinner();
    this.active = false;
	this.service.loading.present();
    if(this.service.notNullValueLogin(this.user)){
	  this.active = true;
	  this.service.loading.dismiss();
      return;
    }
  
    this.http.login(this.user).subscribe(data => {
      if(data.status >= 200 && data.status < 300){
		console.log(this.user.username)
		  this.storage.set('user',this.user.username);
          this.navCtrl.setRoot(MenuPage);
      }
	  this.active = true;
	  this.service.loading.dismiss();
      //this.service.Alert(data.message, "Ok para continuar");
      }, error => {
        this.service.Alert("Error de conexion", "Intente mas tarde")
		this.active = true;
		this.service.loading.dismiss();
        console.log(error);
    })
  
  }

  goToSignup(){
		this.navCtrl.push(SignupPage);
	 }

}
