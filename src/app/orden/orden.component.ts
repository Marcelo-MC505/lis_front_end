import { Component, OnInit } from '@angular/core';
import { Orden } from './orden';
import { OrdenService } from './orden.service';
import { EmpleadoService } from './empleado.service';
import { TipoOrdenService } from './tipo-orden.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit{
  ordenes: Orden[] = [];
  
  constructor(
    private ordenService:OrdenService,
    private empleadoService:EmpleadoService,
    private tipoordenService:TipoOrdenService
    ) { }

  ngOnInit(): void {
      this.ordenService.getAll().subscribe(
        o => this.ordenes=o
      );
  }
  
}
