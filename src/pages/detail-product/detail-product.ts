import { Component } from '@angular/core';
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

  product = {id:null, title:'', description:'', price:null, existence: null};
	data = {
			id:null,
			user:null,
			product:null,
			path:null
			};
	package = {
			   data:null,
			   product:null
			   }
  id;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpProvider,
              public service: Service,
			  public storage: Storage){
			  this.id = navParams.get("id");
			  console.log(this.product);
			  console.log(this.id);
	
    this.storage.get('user').then((data) => {
      console.log(data)
      this.data.user = data;
	  
	  if(this.id!=0){
		  this.data.id = this.id;
		  this.data.path = "detailMyProduct"
		  this.http.detailMyProduct(this.data).subscribe(res=>{
		  this.product = res.product;
		  console.log(this.product)
		  console.log(res);
		  })
		console.log(this.data);
		}
	  
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProductPage');
  }

  addProduct(){
	 this.data.product = this.product;
    if(this.id != 0){
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
