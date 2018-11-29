import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Service } from '../../service/service.service';
import { DashboardPage } from '../dashboard/dashboard'
import { Storage } from '@ionic/storage';

/**
 * Generated class for the DetailProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-product',
  templateUrl: 'detail-product.html',
})
export class DetailProductPage {
	
	@ViewChild('existence') existence;
  product = {id_product:null, name_product:'', description:'', price:null, existence: null};
	data = {
			id_product:null,
			user:null,
			product:null,
			path:null
			};
	package = {
			   data:null,
			   product:null
			   }
  id_product;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpProvider,
              public service: Service,
			        public storage: Storage){
			  this.id_product = navParams.get("id_product");
	
    this.storage.get('user').then((data) => {
      this.data.user = data;
	  
      if(this.id_product!=0){
        this.data.id_product = this.id_product;
        this.data.path = "detailMyProduct"
        this.http.detailMyProduct(this.data).subscribe(res=>{
		console.log(res);
		console.log(res.product);
        this.product = res.product;
        
        })

      }
	  
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProductPage');
  }

  addProduct(){
	/**
	*   al parecer
	*   el problema recae en el limite de bits
	*   que puede llegar a tener una variable int
	*/
	  this.data.product = this.product;
	  if(this.id_product != 0){
      this.data.path = "updateProduct";
      this.http.updateProduct(this.data).subscribe(data=>{
        this.service.Alert(data.message," OK para continuar");
        this.navCtrl.pop();
        return;
      })
      
    }else{
      this.data.path = "craeteProduct"; 
	  console.log(this.data)
      this.http.addProduct(this.data).subscribe(data=>{
        this.service.Alert(data.message,"OK para continuar");
        this.navCtrl.pop();
        return;
      })
    }	
}

deleteProduct(){
    this.data.path = "deleteProduct"; 
    this.http.deleteProduct(this.data).subscribe(data=>{
        this.service.Alert(data.message," OK para continuar");
        this.navCtrl.pop();
      })
  }

}
