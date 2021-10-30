import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //connect frontend to backend

  apiUrl = 'http://localhost:3000/usuarios';

  //get all data

  getAllData():Observable<any>{
    return this._http.get(this.apiUrl);
  }

  //create data

  createData(data:any):Observable<any>{
    console.log(data, 'create!')
    return this._http.post(this.apiUrl, data);
  }

  //delete data

  deleteData(Matricula:any):Observable<any>{
    let mat = Matricula;
    return this._http.delete(this.apiUrl+'/'+mat);
  }

  //update data

  updateData(data:any, Matricula:any):Observable<any>{
    let mat = Matricula;
    return this._http.put(this.apiUrl+'/'+mat, data);
  }

  //get single data

  getSingleData(Matricula:any):Observable<any>{
    let mat = Matricula;
    return this._http.get(this.apiUrl+'/'+mat);
  }

  //get Login

  getLogin(Login:any):Observable<any>{
    let log = Login;
    return this._http.get(this.apiUrl+'/'+log);
  }

}
