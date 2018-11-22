import { Injectable } from '@angular/core';
import { AlertController, ToastController} from 'ionic-angular';
import { HttpProvider } from '../providers/http/http';

@Injectable()
export class Service{

    
    constructor(public alertCtrl: AlertController,
				private toastCtrl: ToastController,
				public http: HttpProvider
				){}
    
    Alert(title, subtitle){
        let alert = this.alertCtrl.create({
            title:title,
            subTitle:subtitle,
            buttons: ["OK"]
        });
        alert.present();
    }


	 /*
	 showConfirm(){
		const confirm = this.alertCtrl.create({
			title: '¿Estas seguro?',
			message: 'Al aseptar, se borrara tu cuenta permanentemente',
			buttons:[
				{
				text:'Cancelar',
				handler: ()=>{
					return false;
					console.log("se a cancelado")					
					}
				},
				{
				text:'Si',
				handler: ()=>{
					return true;
					console.log("se a eliminara esta cuenta")
					}
				}
			]
		})
     }
     */
     

      presentToast(message, time, position){
		let toast = this.toastCtrl.create({
			message: message,
			duration: time,
			position: position
		});
		toast.onDidDismiss(() => {
			console.log('Dismissed toast')
		});
		toast.present();
	}

  /**
   * notNullValueLogin
   */
  public notNullValueLogin(json) {
	  let username = json.username , password = json.password;
	  if(username == '' && password == ''){
		  this.Alert('A ocuarrido un error',' Debes de llenar todos los campos');
		  return true;
	  }
	  else if(json.username == ''){
		  this.Alert('Se deben de rellenar todos los campo','Te a faltado el nombre de usuario');
		  return true;
	  }
	  else if(json.password == ''){
		  this.Alert('Se deben de rellenar todos los campos','Te a faltado la contraseña');
		  return true;
	  }
  }
  
   /**
   * notNullValueSignUp
   */

  public notNullValueSignUp(json){
	  console.log(json);
	  
	  if(json.username=="" || json.name=="" || json.lastname=="" || json.email=="" || json.password=="" || json.confirPassword==""){
		  this.Alert('Por favor llene todos los campos','OK para continuar');
		  return true
	  }
	  else if(json.password != json.confirPassword){
		  this.Alert('Las contraseñas introducidas no coinciden','Por favor intente de nuevo');   
		  return true      
	  }
	  //else if("la contraseña no debe contener menos de ocho caracteres"){}
	  
  }
  
  public notNullValueProduct(json){
	  console.log(json);
	  
	  if(json.title=="" || json.description==""){
		  this.Alert("Debes de llenar todos los campos","");
		  return true;
	  }
   }


}


/*

ionic cordova plugin add cordova-sqlite-storage
Next, install the package (comes by default for Ionic apps > Ionic V1):

npm install --save @ionic/storage
Next, add it to the imports list in your NgModule declaration (for example, in src/app/app.module.ts):

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  
  */