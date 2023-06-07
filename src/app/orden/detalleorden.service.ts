import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Detalleorden } from './detalleorden';

@Injectable({
  providedIn: 'root'
})
export class DetalleordenService {

  private url: string = "http://localhost:8080/orden";

  constructor(private http:HttpClient) { }

  getAll():Observable<Detalleorden[]>{
    return this.http.get<Detalleorden[]>(this.url+'/getAll');
  }

  create(detalleorden:Detalleorden):Observable<Detalleorden>{
    return this.http.post<Detalleorden>(this.url+'/save', detalleorden);
  }
}
