import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioImprime } from './usuario-imprime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioimprimeService {

  private url:string="http://localhost:8084/usuarioimprime/getAll"
  idUsuarioImprime!: number;

  constructor( private http:HttpClient) { }

  //obtener paciente
  getAll():Observable<UsuarioImprime[]>{
    return this.http.get<UsuarioImprime[]>(this.url);
  }

    //obtener un empleado
  getOne(id:number):Observable<UsuarioImprime>{
    return this.http.get<UsuarioImprime>(this.url+'/'+id);
  }
}
