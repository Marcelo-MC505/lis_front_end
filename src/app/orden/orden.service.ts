import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orden } from './orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private url:string="http://localhost:8080/orden";
  idTipoOrden!: number;

  constructor( private http:HttpClient) { }

  //obtener ordenes
  getAll():Observable<Orden[]>{
    return this.http.get<Orden[]>(this.url+'/getAll');
  }

  //crear nueva orden
  create(orden:Orden):Observable<Orden>{
    return this.http.post<Orden>(this.url+'/save', orden);
  }
}
