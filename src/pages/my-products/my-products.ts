import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { DetailProductPage } from '../detail-product/detail-product';
import { DashboardPage } from '../dashboard/dashboard';
import { Storage } from '@ionic/storage';
import { Service } from '../../service/service.service';

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
			}

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
			  public storage: Storage,
			  public http: ProductProvider,
			  public service: Service) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyProductsPage');
  }
  ionViewWillEnter(){
    this.refresh();
  }
  
  goToDetail(id){
	  console.log("voy a detalles de nota")
	  this.navCtrl.push(DetailProductPage,{id_product:id});
  }
  
  createProduct(){
      this.navCtrl.push(DetailProductPage,{id_product:0});
  }

  refresh(){
	this.service.loadingSpinner();
	this.service.loading.present();
	this.storage.get('user').then((data) => {
            this.data.username = data;
            this.http.myProductList(this.data).subscribe(res=>{
			  this.service.loading.dismiss();
              this.products = res.products;
			  console.log(res);
			  
            });
          });
  }
  
  back(){
	console.log("back");
	this.navCtrl.setRoot(DashboardPage)
  }


}
