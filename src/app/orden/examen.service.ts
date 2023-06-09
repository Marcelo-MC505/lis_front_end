import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Examen } from './examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

    private url:string="http://localhost:8086/examen";
  idExamen!: number;
  constructor(private http:HttpClient) { }

  getAll():Observable<Examen[]>{
    return this.http.get<Examen[]>(this.url+'/getAll');
  }

}
