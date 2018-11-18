import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DetailProductPage } from '../detail-product/detail-product';

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
			path:"productList"
			}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
                /*
          this.storage.get('user').then((data) => {
            this.data.username = data;
            this.http.myProductList(this.data).subscribe(res=>{
            
              this.products = res.products;
            });
          });
          */
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


}
