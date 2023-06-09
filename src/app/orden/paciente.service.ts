import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from './paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  private url:string="http://localhost:8082/paciente/getAll"
  idPaciente!: number;

  constructor( private http:HttpClient) { }

  //obtener paciente
  getAll():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.url);
  }

    //obtener un empleado
  getOne(id:number):Observable<Paciente>{
    return this.http.get<Paciente>(this.url+'/'+id);
  }
}
