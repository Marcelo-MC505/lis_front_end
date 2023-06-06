import { Component } from '@angular/core';
import { Orden } from './orden';
import { OrdenService } from './orden.service';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  empleados: Empleado[] = [];
  tipoordenes: TipoOrden[] = [];
  tiposervicios: TipoServicio[] = [];
  pacientes: Paciente[] = [];
  usuarios: UsuarioImprime[] = [];  
  selected: string = '';

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

  getEmpleadoNombre(idEmpleado: number): string {
    const empleado = this.empleados.find(e => e.idEmpleado === idEmpleado);
    if (empleado) {
      return empleado.primerNombre + ' ' + empleado.segundoNombre + ' ' + empleado.primerApellido + ' ' + empleado.segundoApellido;
    } else { 
      return '';
    }
  }

  getTipoOrdenDescripcion(idTipoOrden: number): string {
    const tipoorden = this.tipoordenes.find(e => e.idTipoOrden === idTipoOrden);
    return tipoorden ? tipoorden.descripcion : '';
  }

  getTipoServicioDescripcion(idTipoServicio: number): string {
    const tiposervicio = this.tiposervicios.find(e => e.idTipoServicio === idTipoServicio);
    return tiposervicio ? tiposervicio.descripcion : '';
  }

  getPacienteNombre(idPaciente: number): string {
    const paciente = this.pacientes.find(e => e.idPaciente === idPaciente);
    if (paciente) {
      return paciente.primerNombre + ' ' + paciente.segundoNombre + ' ' + paciente.primerApellido + ' ' + paciente.segundoApellido 
      + ' ¿Está embarazada? (N: No, S: Si) -> ' + paciente.emabrazada;
    } else { 
      return '';
    }
  }

  getUsuarioLogin(idUsuarioimprime: number): string {
    const user = this.usuarios.find(e => e.idUsuario === idUsuarioimprime);
    return user ? user.login : '';
  }

  create(): void {
    console.log(this.ordenng);
  }

  
}
