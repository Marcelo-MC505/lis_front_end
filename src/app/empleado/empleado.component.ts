import { Component } from '@angular/core';
import { Empleado } from '../orden/empleado';
import { EmpleadoService } from '../orden/empleado.service';

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
      e => this.empleados = e
    );
  }
}
