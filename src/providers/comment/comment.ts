import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Service } from '../../service/service.service';
/*
  Generated class for the CommentProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommentProvider {

	url;

  constructor(public http: HttpClient,
			  public service: Service) {
    console.log('Hello CommentProvider Provider');
	console.log(this.service.url);
	this.url = this.service.url;
  }

  getComments(comment):Observable<any>{
    return this.http.post(`${this.url}GetComments`, {comment}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  addComment(comment):Observable<any>{
    return this.http.post(`${this.url}AddComment`, {comment}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  deleteComment(comment):Observable<any>{
    return this.http.post(`${this.url}DeleteComment`, {comment}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  updateComment(comment):Observable<any>{
    return this.http.post(`${this.url}updateComment`, {comment}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }
  
}
