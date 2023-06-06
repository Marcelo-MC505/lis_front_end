import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoServicio } from './tipo-servicio';

@Injectable({
  providedIn: 'root'
})
export class TipoServicioService {

  private url:string="http://localhost:8085/tiposervicio/getAll";
  
  constructor( private http:HttpClient) { }

  //obtener empleado
  getAll():Observable<TipoServicio[]>{
    return this.http.get<TipoServicio[]>(this.url);
  }

    //obtener un empleado
  getOne(id:number):Observable<TipoServicio>{
    return this.http.get<TipoServicio>(this.url+'/'+id);
  }
}
