import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { Service } from '../../service/service.service';
import { CommentProductPage } from '../comment-product/comment-product';

/**
 * Generated class for the DetailProductCatalogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-product-catalog',
  templateUrl: 'detail-product-catalog.html',
})
export class DetailProductCatalogPage {

  product = {id_product:null, name_product:null, description:null, price: null}
  data = {
          id_product:null,
          }
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: ProductProvider,
              public service: Service) {
              this.service.loadingSpinner();
			  this.service.loading.present();
                this.data.id_product = navParams.get("id_product");

                this.http.detailProduct(this.data).subscribe(data=>{
                  if(data.status >= 200 && data.status < 300){
                        this.product = data.product;
						this.service.loading.dismiss();
                      }
                    //this.service.Alert(data.message, "Ok para continuar");
                    }, error => {
                      this.service.Alert("Error de conexion", "Intente mas tarde")
                      console.log(error);
                    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProductCatalogPage');
  }
  
  comments(){
	console.log(this.data)
	this.navCtrl.push(CommentProductPage,{id_product:this.data.id_product});
  }

}
