import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Service } from '../../service/service.service';
import { HttpProvider } from '../../providers/http/http';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {
    username:"",
    name:"",
    lastname:"",
    email:"",
    password:"",
    confirPassword:"",
    path:"signUp"
    }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service: Service,
              public http: HttpProvider,
              public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  Alert(title, subtitle){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }

  signUp(){
	console.log("por aqui signUp")
    if(this.service.notNullValueSignUp(this.user)){
		console.log("no se hizo la peticion")
		return;
	}
	
    
	this.http.signUp(this.user).subscribe(data => {
      if(data.status >= 200 && data.status < 300){
		  console.log(data);
		  this.navCtrl.pop();
		  }
		  this.Alert(data.message,"Presione OK para continuar");
	  },error => {
      this.Alert("Error de conexion","Intente mas tarde");
    })
	
	
  }

}
