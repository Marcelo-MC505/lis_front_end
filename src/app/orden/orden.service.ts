import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orden } from './orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private url:string="http://localhost:8080/orden/getAll";
  private urlE:string="http://localhost:8080/empleado/";
  private urlTO:string="http://localhost:8080/"
  
  constructor( private http:HttpClient) { }

  //obtener ordenes
  getAll():Observable<Orden[]>{
    return this.http.get<Orden[]>(this.url);
  }

  //crear nueva orden
  create(orden:Orden):Observable<Orden>{
    return this.http.post<Orden>(this.url, orden);
  }

  //obtener una orden
  getOne(id:number):Observable<Orden>{
    return this.http.get<Orden>(this.url+'/'+id);
  }

  //actualizar orden
  update(orden:Orden):Observable<Orden>{
    return this.http.put<Orden>(this.url, orden);
  }

  //eliminar orden
  delete(id:number):Observable<Orden>{
    return this.http.delete<Orden>(this.url+'/'+id);
  }
}
