import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {
  empleados: Empleado[] = [];

  constructor(private empleadoService:EmpleadoService) { }

  ngOnInit(): void {
    this.empleadoService.getAll().subscribe(
      e => this.empleados=e
    )
  }

}
