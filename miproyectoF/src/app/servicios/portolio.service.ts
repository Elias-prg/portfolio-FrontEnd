import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Persona } from '../modelo/Persona';
@Injectable({
  providedIn: 'root'
})
export class PortolioService {
  /*

  private baseURL = `http://localhost:3000/api`
  app.use('/api', routes)   (esto es para node.js eh iria en el servidor.js del ejemplo , pero yo no uso eso)
  
   private  baseUrl = 'http://localhost:8080/primerproyecto/personas' ; 
  */

  
   private  baseUrl = 'https://backprimerapp.onrender.com/auth/' ;  

  private educationSource = new BehaviorSubject<string>('');
  currentEducation = this.educationSource.asObservable();

 

  constructor (
     private http:HttpClient
     ) {   }
  

   obtenerDatos(): Observable<any> { 
    return this.http.get("./assets/data/data.json");                        /*   return this.http.get(`${this.baseURL}/getAll`)    */
   }

  editar(data: any){
      return this.http.put('./assets/data/data.json',data) ;
  }
  postData(data: any): Observable<any> {
    return this.http.post(`./assets/data/data.json`, data) ;
   } 


   changeEducation(education: string) {
    this.educationSource.next(education);
  }
   
  getPersona(){
    return this.http.get<Persona[]>(this.baseUrl);
  }
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
  
  