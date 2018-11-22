import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http'
import { Service } from '../../service/service.service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MyDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-data',
  templateUrl: 'my-data.html',
})
export class MyDataPage {

  data = {
    username:'',
      name:'',
      lastname:'',
      email:'',
      path:'getDataUserProfile'
      }
   comparacion = {
				  username:null,
				  name:null,
				  lastname:null,
				  email:null
				  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public service: Service,
              public http: HttpProvider,
			  public storage: Storage) {

    this.storage.get("user").then((res)=>{
      console.log(res);
      this.data.username = res;
	  console.log(this.data);
	  
	  this.http.getDataUserProfile(this.data).subscribe(data=>{
          if(data.status >= 200 && data.status < 300){
			console.log(data)
            this.data = data.data;
			
          }
        },error => {
          this.service.Alert(error.message,"OK para continuar");
        });
	  
      });
	  
        
        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyDataPage');
  }

  editProfile(){
    this.data.path = "updateUserProfile"
	console.log(this.data);
      this.http.updateUserProfile(this.data).subscribe(data => {
        if(data.status >= 200 && data.status < 300){
          //this.data = data.data;
          this.navCtrl.pop();
        }
        this.service.Alert(data.message,"OK para continuar");
        
      }, error => {
        this.service.Alert(error.message,"OK para continuar");
      })
    }

}
