import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoOrden } from './tipo-orden';

@Injectable({
  providedIn: 'root'
})
export class TipoOrdenService {

  private url:string="http://localhost:8083/tipoorden/getAll";
  
  constructor( private http:HttpClient) { }

  //obtener ordenes
  getAll():Observable<TipoOrden[]>{
    return this.http.get<TipoOrden[]>(this.url);
  }

  //obtener una orden
  getOne(id:number):Observable<TipoOrden>{
    return this.http.get<TipoOrden>(this.url+'/'+id);
  }
}