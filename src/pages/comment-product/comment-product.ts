import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommentProvider } from '../../providers/comment/comment';
import { Service } from '../../service/service.service';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CommentProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment-product',
  templateUrl: 'comment-product.html',
})
export class CommentProductPage {
	textarea:Boolean = false;
	add:Boolean = true;
	@ViewChild ('desc_newComment')desc_newComment;
	//@ViewChild('username') username;
	active = false; 
	comments = [];
	data = {
			id_product:null,
			username:null,
			}
			
	dataInsertComment = {
				  id_product:null,
				  comment:null,
				  username:null,
				 }
	newComment = { 
				  id_comment:null,
				  desc_comment:""
				 }
				 
  constructor(public navCtrl: NavController, 
			  public navParams: NavParams,
			  public http: CommentProvider,
			  public service: Service,
			  public storage: Storage) {
			
		this.data.id_product = navParams.get("id_product");
		this.dataInsertComment.id_product = navParams.get("id_product");
		this.storage.get('user').then((data) => {
		console.log(data);
			
			this.dataInsertComment.username = data;
			this.data.username = data;
			console.log(this.dataInsertComment);
			//this.getComments();
		});
		
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentProductPage');
  }
   
   ionViewWillEnter(){
    this.getComments();
  }
  
  
  createComment(){
  
  console.log("solo para desplegra el textarea ");
  this.textarea = true;
  this.add = false;
	
  }
  
  addComment(){
  
		this.service.loadingSpinner();
		this.service.loading.present();
		this.newComment.desc_comment = this.desc_newComment.value;
		this.dataInsertComment.comment = this.newComment;
		
	
	this.http.addComment(this.dataInsertComment).subscribe(data=>{
		 if(data.status >= 200 && data.status < 300){
			console.log(data);
		  }
		 //this.service.Alert(data.message, "Ok para continuar");
		 
		 this.textarea = false;
		 this.add = true;
		 this.service.loading.dismiss();
		 this.getComments();
		},error => {
		  this.service.Alert("Error de conexion", "Intente mas tarde")
		  console.log(error);
				});
		
  }
  
  deleteComment(){
  
		this.service.loadingSpinner();
		this.service.loading.present();
		this.newComment.desc_comment = this.desc_newComment.value;
		this.dataInsertComment.comment = this.newComment;
		console.log(this.dataInsertComment)
	
	console.log(this.dataInsertComment);
	
	this.http.deleteComment(this.dataInsertComment).subscribe(data=>{
		 if(data.status >= 200 && data.status < 300){
			console.log(data);
		  }
		 //this.service.Alert(data.message, "Ok para continuar");
		
		 this.textarea = false;
		 this.add = true;
		 this.service.loading.dismiss();
		},error => {
		  this.service.Alert("Error de conexion", "Intente mas tarde")
		  console.log(error);
				});
		
  }
  
  getComments(){
  
	this.service.loadingSpinner();
	this.service.loading.present();
	console.log(this.data);
	
	this.storage.get('user').then((data) => {
		console.log(data);
			
			this.dataInsertComment.username = data;
			this.data.username = data;
			console.log(this.dataInsertComment);
			
			this.http.getComments(this.data).subscribe(data=>{
		 if(data.status >= 200 && data.status < 300){
			this.comments = data.comments;
			this.service.loading.dismiss();
			console.log(data)
		  }
		 //this.service.Alert(data.message, "Ok para continuar");
		},error => {
		  this.service.Alert("Error de conexion", "Intente mas tarde")
		  console.log(error);
				})
			
		});
	
  
  }

	}
