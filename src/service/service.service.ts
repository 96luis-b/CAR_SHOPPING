import { Injectable } from '@angular/core';
import { AlertController, ToastController, NavController } from 'ionic-angular';
import { HttpProvider } from '../providers/http/http';

@Injectable()
export class Service{

    constructor(public alertCtrl: AlertController,
        private toastCtrl: ToastController,
        public http: HttpProvider,
        public navCtrl: NavController){}
    
    Alert(title, subtitle){
        let alert = this.alertCtrl.create({
            title:title,
            subTitle:subtitle,
            buttons: ["OK"]
        });
        alert.present();
    }


    /**
	* notNullValueLogin
	*/
	public notNullValueLogin(json){
		let username = json.username, password = json.password;
		if(username == '' && password == ''){
			this.Alert('A ocurrido un error', 'Debes de llenar todos los campor');
			return true;
		}
		else if(username == ''){
			this.Alert('Se deben de rellenar todos los campos', 'Te a faltado el nombre de usuario');
			return true;
		}
		else if(password == ''){
			this.Alert('Se deben de rellenar todos los campos', 'Te a faltado la contraseña');
			return true;
		}
	}


}


