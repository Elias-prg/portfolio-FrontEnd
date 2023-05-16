import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Eduyexp } from '../modelo/eduyexp';

@Injectable({
  providedIn: 'root'
})
export class EduyexpserviceService {

 URL = "http://localhost:8080/info/";
 

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Eduyexp[]>{
    return this.httpClient.get<Eduyexp[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Eduyexp>{
    return this.httpClient.get<Eduyexp>(this.URL + `detail/${id}`);
  }

  public save(eduyexp: Eduyexp): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', eduyexp);
  }

  public update(id: number, eduyexp: Eduyexp): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, eduyexp);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
