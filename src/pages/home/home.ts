import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
			  public http: HttpProvider,
			  public storage: Storage) {
			  console.log("se activara la verificacion de sesion");
			
			this.storage.get('user').then((data) => {
			console.log(data)
            if(data==null){
            }else{
              this.navCtrl.setRoot(MenuPage);
            }
				});
				
		/*
		this.http.toVerifySession().subscribe(data => {
		console.log(data)
		if(data.status >= 200 && data.status < 300){
		  console.log(data);
		  }
		},error => {
		  console.log(error);
		})
		*/
  }

  next_LoginPage(){
    this.navCtrl.push(LoginPage);
	
  }

}
