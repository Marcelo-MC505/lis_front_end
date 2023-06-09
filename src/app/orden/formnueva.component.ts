import { Component, Injectable } from '@angular/core';
import { Orden } from './orden';
import { OrdenService } from './orden.service';
import { FormGroup, FormBuilder, NumberValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';
import { Empleado } from './empleado';
import { TipoOrden } from './tipo-orden';
import { TipoServicio } from './tipo-servicio';
import { Paciente } from './paciente';
import { UsuarioImprime } from './usuario-imprime';
import { EmpleadoService } from './empleado.service';
import { TipoOrdenService } from './tipo-orden.service';
import { TipoServicioService } from './tipo-servicio.service';
import { PacienteService } from './paciente.service';
import { UsuarioimprimeService } from './usuarioimprime.service';
import { Examen } from './examen';
import { ExamenService } from './examen.service';
import { Detalleorden } from './detalleorden';
import { DetalleordenService } from './detalleorden.service';

@Component({
  selector: 'app-formnueva',
  templateUrl: './formnueva.component.html',
  styleUrls: ['./formnueva.component.css']
})
export class FormnuevaComponent {
  ordenng: Orden = new Orden();
  ordenes: Orden[] = [];
  titulo:string = "Registro de orden"
  titulo2:string = "Registro de detalle"
  empleados: Empleado[] = [];
  tipoordenes: TipoOrden[] = [];
  tiposervicios: TipoServicio[] = [];
  pacientes: Paciente[] = [];
  usuarios: UsuarioImprime[] = [];
  examenes: Examen[] = [];
  detalleordenng: Detalleorden = new Detalleorden();

  constructor(
    private ordenService:OrdenService,
    private empleadoService:EmpleadoService,
    private tipoordenService:TipoOrdenService,
    private tiposervicioService:TipoServicioService,
    private pacienteService:PacienteService,
    private usuarioImprimeService:UsuarioimprimeService,
    private examenService:ExamenService,
    private detalleordenService:DetalleordenService,
    private router:Router,

    ) {  }

  ngOnInit(): void {
      this.ordenService.getAll().subscribe(
        o => this.ordenes = o
      );
      this.empleadoService.getAll().subscribe(
        e => this.empleados = e
      );
      this.tipoordenService.getAll().subscribe(
        to => this.tipoordenes = to
      );
      this.tiposervicioService.getAll().subscribe(
        ts => this.tiposervicios = ts
      );
      this.pacienteService.getAll().subscribe(
        p => this.pacientes = p
      );
      this.usuarioImprimeService.getAll().subscribe(
        ui => this.usuarios = ui
      );
      this.examenService.getAll().subscribe(
        ex => this.examenes = ex
      );
  }


 create(): void {
    this.ordenng.idUsuarioImprime = 1;
    this.ordenng.idEmpleado = 1;
    this.ordenng.idPaciente = 1;
    this.ordenng.idTipoServicio = 1;
    this.ordenng.idTipoOrden = 1;
    console.log(this.ordenng);

    this.ordenService.create(this.ordenng).subscribe(
      res => this.router.navigate(['/orden/formnueva'])
    );
  }

  createDetalle(): void {
    this.detalleordenng.idOrden = 1;
    this.detalleordenng.idExamen = 1;
    console.log(this.ordenng);
    this.detalleordenService.create(this.detalleordenng).subscribe(
      res => this.router.navigate(['/orden'])
    );
  }
}
