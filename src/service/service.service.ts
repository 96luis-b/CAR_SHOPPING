import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController} from 'ionic-angular';
import { HttpProvider } from '../providers/http/http';
import { copyInputAttributes } from 'ionic-angular/util/dom';

@Injectable()
export class Service{
	url = "http://localhost:8080/SHOPPING_CAR_2.0/"; 
	//url = "http://192.168.43.92:8080/SHOPPING_CAR_2.0/";
    
	loading;
	toast;
    constructor(public alertCtrl: AlertController,
				private toastCtrl: ToastController,
				public http: HttpProvider,
				public loadingCtrl: LoadingController
				){
				console.log("service")
				this.loadingSpinner();
				//this.presentToast();
		}
    
    Alert(title, subtitle){
        let alert = this.alertCtrl.create({
            title:title,
            subTitle:subtitle,
            buttons: ["OK"]
        });
        alert.present();
    }
	
	showEditComment(){
        let alert = this.alertCtrl.create({
			title:"Comentario",
			inputs:[
				{
					name:"comment"
				}
			],
            buttons: [
			   {
				text:"Guardar", 
				handler: (name)=>{
					console.log("se ha guardado "+name);
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
  
	
	loadingSpinner(){
		this.loading = this.loadingCtrl.create({
		content: "Espere un momento..."
		})
	  }

      presentToast(message){
		this.toast = this.toastCtrl.create({
			message: message,
			duration: 3000,
			position: 'top'
		});
	}

  /**
   * notNullValueLogin
   */
   
   
  public notNullValueLogin(json) {
   /**
   *  indexOf() me devuelve el -1 si no ecuentra lo que busco
   *  y un indice entero si lo encuentra
   * example, 
   *  cadena = "hola mundo";
   * if(cadena.indexOf("m") != -1{
   *  	alert("la m fue encontrada") 
   *  }
   */

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