import { Component } from '@angular/core';
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

@Component({
  selector: 'app-formnueva',
  templateUrl: './formnueva.component.html',
  styleUrls: ['./formnueva.component.css']
})
export class FormnuevaComponent {
  ordenng: Orden = new Orden();
  ordenes: Orden[] = [];
  titulo:string = "Registro de orden"
  titulo2:string = "Registro de examen"  
  empleados: Empleado[] = [];
  tipoordenes: TipoOrden[] = [];
  tiposervicios: TipoServicio[] = [];
  pacientes: Paciente[] = [];
  usuarios: UsuarioImprime[] = [];

  constructor(
    private ordenService:OrdenService,
    private empleadoService:EmpleadoService,
    private tipoordenService:TipoOrdenService,
    private tiposervicioService:TipoServicioService,
    private pacienteService:PacienteService,
    private usuarioImprimeService:UsuarioimprimeService,
    private router:Router
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
  }

  create(): void {
    this.ordenng.idUsuarioImprime = 4;
    this.ordenng.idEmpleado = 6;
    this.ordenng.idPaciente = 2;
    this.ordenng.idTipoServicio = 6;
    this.ordenng.idTipoOrden = 2;
    console.log(this.ordenng);
    
    this.ordenService.create(this.ordenng).subscribe(
      res => this.router.navigate(['/orden'])        
    );
  }
}
