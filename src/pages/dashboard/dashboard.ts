import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { DetailProductCatalogPage } from '../detail-product-catalog/detail-product-catalog';
import { Storage } from '@ionic/storage';
import { Service } from '../../service/service.service';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
	
	product:any;
	data = {
			path:"listProductAll"
			}
	listProduct:any;
	search;
	active = false;
	
  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  public http: HttpProvider,
			  public alertCtrl: AlertController,
			  public storage: Storage,
			  public service: Service) {
			  
			  
			
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  
   Alert(title, subtitle){
        let alert = this.alertCtrl.create({
            title:title,
            subTitle:subtitle,
            buttons: ["OK"]
        });
        alert.present();
    }
  
  viewList(id_product, datos){
	this.navCtrl.push(DetailProductCatalogPage,{id_product:id_product})
  }
  
  searchProduct(ev: any){
	
	let val = ev.target.value;
	console.log(val);
	
	if(val && val.trim() != ''){
		if(this.active==true){
			console.log(this.listProduct);
			this.product = this.listProduct.filter((item)=>{
				return (item.name_product.toLowerCase().indexOf(val.toLowerCase()) > -1);
			})
		}
		
	}
	
	
	
  }
  
  ionViewWillEnter(){
	this.refresh();
  }
  
  refresh(){
			  this.service.loadingSpinner();
			  this.service.loading.present();
	  	this.storage.get('user').then((data) => {
					console.log(data)
					});
		console.log(this.active);
		this.http.listProductAll(this.data).subscribe(data=>{
			this.service.loading.dismiss();
			console.log(data);
			this.listProduct = data.listProductAll;
			this.active=true;
			
		},error=>{
			console.log(error)
		})
  }
  

}
