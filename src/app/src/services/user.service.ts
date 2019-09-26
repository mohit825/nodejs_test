import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  constructor(
    private http:HttpClient
  ) { }

    getDataFromServer(){
      return this.http.get('http://localhost:9000/user');
    }

    createDb(){
      return this.http.get('http://localhost:9000/createdb')
    }

    getAllData(){
    return  this.http.get('http://localhost:9000/users')

    }
}
