import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Service } from '../../service/service.service';
import { DashboardPage } from '../dashboard/dashboard'

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

  product = {id:null, title:'', description:'', price:0, exitencia: 0};
	data = {
			id_product:null,
			user:null,
			path:null,
      };
  id;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpProvider,
              public service: Service){
/*
    this.storage.get('user').then((data) => {
      var user = JSON.parse(data);
      this.data.user = user;
      });

    this = navParams.get("id");

    if(this.id!=0){
      this.data.id = this.id;
      this.data.path = "myProductList"
      http.myProductList(this.data).subscribe(res=>{
      this.note = res.note;
      })
      
    }
*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailProductPage');
  }

  addProduct(){
    if(this.id != 0){
      this.data.path = "updateProduct";
      this.http.updateNote(this.data).subscribe(data=>{
        this.service.Alert(data.message," OK para continuar");
        this.navCtrl.pop();
        return;
      })
      
    }else{
      this.data.path = "craeteProduct"; 
      this.http.addProduct(this.data).subscribe(data=>{
        this.service.Alert(data.message,"OK para continuar");
        this.navCtrl.pop();
        return;
      })
    }	
}

deleteProduct(){
    this.data.path = "deleteNote"; 
    this.http.deleteNote(this.data).subscribe(data=>{
        this.service.Alert(data.message," OK para continuar");
        this.navCtrl.setRoot(DashboardPage);
      })
  }

}
