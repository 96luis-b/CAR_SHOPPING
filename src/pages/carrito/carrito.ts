import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { Storage } from '@ionic/storage';
import { Service } from '../../service/service.service';
/**
 * Generated class for the CarritoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

	data = {user:"luisb"}

  constructor(public navCtrl: NavController,
			  public navParams: NavParams,
			  public http: ProductProvider,
			  public service: Service) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarritoPage');
  }

  buy(){
  console.log("por aqui buy");
 
  
    this.http.algo(this.data).subscribe(data => {
      if(data.status >= 200 && data.status < 300){
		console.log(data)
      }
	 
      //this.service.Alert(data.message, "Ok para continuar");
      }, error => {
        
    })
  }
  
}
