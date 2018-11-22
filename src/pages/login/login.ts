import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HttpProvider } from '../../providers/http/http';
import { Service } from '../../service/service.service';
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
  path = {path:"login"}

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: HttpProvider,
              public service: Service,
			  public storage: Storage
              ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    
    if(this.service.notNullValueLogin(this.user)){
      return;
    }
  
    this.http.login(this.path, this.user).subscribe(data => {
      if(data.status >= 200 && data.status < 300){
		  this.storage.set("user",this.user.username)
          this.navCtrl.setRoot(MenuPage);
      }
      this.service.Alert(data.message, "Ok para continuar");
      }, error => {
        this.service.Alert("Error de conexion", "Intente mas tarde")
        console.log(error);
    })
  
  }

  goToSignup(){
		this.navCtrl.push(SignupPage);
	 }

}
