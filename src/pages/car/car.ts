import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarProvider } from '../../providers/car/car';
import { Storage } from '@ionic/storage';
import { Service } from '../../service/service.service';

/**
 * Generated class for the CarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-car',
  templateUrl: 'car.html',
})
export class CarPage {
	car:any;
	total = 0;
	data = {
			username:null,
			car:null
			}
  constructor(public navCtrl: NavController,
			  public navParams: NavParams,
			  public http: CarProvider,
			  public storage: Storage,
			  public service: Service) {
			  this.car = navParams.get("car");
			  this.storage.get('user').then((data) => {
				console.log(data);
				this.data.username = data;
				this.monto();
		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarPage');
  }
  
  monto(){
	if(this.car==undefined){return;}
	for(let i=0; i<this.car.length; i++){
		this.total = this.total + this.car[i].price;
	}
  }
  
  toBuy(){

	this.service.loadingSpinner();
    
	this.service.loading.present();
		this.data.car = this.car;
		
		this.http.toBuy(this.data).subscribe(data=>{
			console.log(data);
			this.service.loading.dismiss();
		})
	
  }
  
plus(product){
	console.log("por aqui Plus")
	console.log(product);
}

less(product){
		console.log("por aqui Less")
	console.log(product);

}  

deleteProduct(product){
		console.log("por aqui deleteProduct")
	console.log(product);

}
  
}
