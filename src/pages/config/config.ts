import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MyDataPage } from '../my-data/my-data';
import { Service } from '../../service/service.service';
import { ProfileProvider } from '../../providers/profile/profile';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {

	user = {
			user:null
			}

  constructor(public navCtrl: NavController,
		      public navParams: NavParams,
			  public service: Service,
			  public alertCtrl: AlertController,
			  public http: ProfileProvider,
			  public storage: Storage) {
			  
			  this.storage.get('user').then((data) => {
				console.log(data)
				if(data==null){
				}else{
					this.user.user = data;
				}
			});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }

	 
	  Alert(){
        let alert = this.alertCtrl.create({
            title:"¿Estas seguro?",
            subTitle:"Al aceptar se borrara esta cuenta permanentemente",
            buttons: [
			   {
				text:"Si", 
				handler: ()=>{
					console.log("se borrara esta cuenta");
					this.http.deleteUserProfile(this.user).subscribe(data => {
						if(data.status >= 200 && data.status < 300){
							this.storage.clear().then(() => {
							this.navCtrl.setRoot(HomePage)
							});
						}
						this.service.Alert(data.message, "Ok para continuar");
						}, error => {
							this.service.Alert("Error de conexion", "Intente mas tarde")
							console.log(error);
						})				
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
  
  pageMyData(){
    this.navCtrl.push(MyDataPage);
  }
  
  deleteCount(){
	console.log("delete Count")
	 this.Alert();
	 console.log("Se ha borrado su cuenta");
  }

}
