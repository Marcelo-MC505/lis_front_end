import { Component, OnInit } from '@angular/core';
import { Orden } from './orden';
import { OrdenService } from './orden.service';
import { EmpleadoService } from './empleado.service';
import { TipoOrdenService } from './tipo-orden.service';
import { Empleado } from './empleado';
import { TipoServicio } from './tipo-servicio';
import { TipoServicioService } from './tipo-servicio.service';
import { PacienteService } from './paciente.service';
import { TipoOrden } from './tipo-orden';
import { Paciente } from './paciente';
import { UsuarioimprimeService } from './usuarioimprime.service';
import { UsuarioImprime } from './usuario-imprime';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit{
  ordenes: Orden[] = [];
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
    private usuarioImprimeService:UsuarioimprimeService
    ) { }

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
      return paciente.primerNombre + ' ' + paciente.segundoNombre + ' ' + paciente.primerApellido + ' ' + paciente.segundoApellido;
    } else { 
      return '';
    }
  }

  getUsuarioLogin(idUsuarioimprime: number): string {
    const user = this.usuarios.find(e => e.idUsuario === idUsuarioimprime);
    return user ? user.login : '';
  }
}