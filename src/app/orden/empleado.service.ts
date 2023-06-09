import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private url:string="http://localhost:8081/empleado/getAll";
  idEmpleado!: number;

  constructor( private http:HttpClient) { }

  //obtener empleado
  getAll():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.url);
  }

    //obtener un empleado
  getOne(id:number):Observable<Empleado>{
    return this.http.get<Empleado>(this.url+'/'+id);
  }
}
