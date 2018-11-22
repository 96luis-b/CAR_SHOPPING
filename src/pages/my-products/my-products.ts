import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DetailProductPage } from '../detail-product/detail-product';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MyProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-products',
  templateUrl: 'my-products.html',
})
export class MyProductsPage {

  products = [];
	data = {
			username:"",
			path:"myProductList"
			}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
			  public storage: Storage,
			  public http: HttpProvider) {
                
          this.refresh();
          
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProductsPage');
  }

  goToDetail(id){
	  console.log("voy a detalles de nota")
	  this.navCtrl.push(DetailProductPage,{id:id});
  }
  
  createProduct(){
      this.navCtrl.push(DetailProductPage,{id:0});
  }

  refresh(){
	this.storage.get('user').then((data) => {
            this.data.username = data;
            this.http.myProductList(this.data).subscribe(res=>{
            
              this.products = res.products;
			  console.log(res);
            });
          });
  }

}
