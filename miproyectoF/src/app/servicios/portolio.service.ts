import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PortolioService {
  /*

  private baseURL = `http://localhost:3000/api`
  app.use('/api', routes)   (esto es para node.js eh iria en el servidor.js del ejemplo , pero yo no uso eso)

  */
  constructor (
     private http:HttpClient
     ) {   }
  

   obtenerDatos(): Observable<any> {
    return this.http.get("json");                  /*   return this.http.get(`${this.baseURL}/getAll`)    */
   }
  /* 
  postData(data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/post`, data)
   }      

  updateData(data: any, id: string): Observable<any> {
    return this.http.patch(`${this.baseURL}/update/${id}`, data)
    }
  
   deleteData(id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/delete/${id}`)
   }


  */
  
  }