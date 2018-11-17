import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

  url = "https://localhost:8080/SHOPPING_CAR"

  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  login(path, user):Observable<any>{
    return this.http.post(`${this.url}${path.path}`, {user}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

}
