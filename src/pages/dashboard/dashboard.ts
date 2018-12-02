import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';
import { DetailProductCatalogPage } from '../detail-product-catalog/detail-product-catalog';
import { CarPage } from '../car/car';
import { CarritoPage } from '../carrito/carrito';
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
  styles: ['dashboard.scss']
})
export class DashboardPage {
	justWatch: Boolean = true;
	selection: Boolean = false;
	
	product:any;
	listProduct:any;
	search;
	active = false;
	car = [];
	
  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  public http: ProductProvider,
			  public alertCtrl: AlertController,
			  public storage: Storage,
			  public service: Service) {
			  
			  
			
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  ionViewWillEnter(){
	console.log("se activo viewWillEnter");
	
	/**
	*	al regresar al dashboard con el boton de retroseso
	*	que trae por defecto ionic, no carga de nuevo la
	*  pagina dashboard, sino que la mantiene activa
	*	
	* solucion: eliminar los nav de retorceso por defecto y 
	* crear los para navegar y cargar las pagina al retroceder
	*/
	
	this.refresh();
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
  
  shoppingCar(){
	this.navCtrl.push(CarPage,{car:this.car});
  }
  
  selected(product){
	console.log(product);
	for(let i=0; i<this.car.length; i++){
		if(this.car[i].id_product == product.id){
			this.car.splice(i,1);
			return;
		}
	}
	this.car.push(product);
  }
  
   
  refresh(){
  
		console.log("refresh");
			  this.service.loadingSpinner();
			  this.service.loading.present();
	  	this.storage.get('user').then((data) => {
					console.log(data)
					});
		console.log(this.active);
		this.http.listProductAll().subscribe(data=>{
			this.service.loading.dismiss();
			console.log(data);
			this.listProduct = data.listProductAll;
			this.active=true;
			
		},error=>{
			console.log(error)
		})
  }
  
  activeSelection(){
	this.justWatch = false;
	this.selection = true;
  }
  activeDetail(){
	this.justWatch = true;
	this.selection = false;
  }

  
  
  
 

}
