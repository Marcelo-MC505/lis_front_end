import { Component } from '@angular/core';
import { Orden } from '../orden';
import { OrdenService } from '../orden.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formeditar',
  templateUrl: './formeditar.component.html',
  styleUrls: ['./formeditar.component.css']
})
export class FormeditarComponent {
  orden: Orden = new Orden();
  titulo: string="Editar Orden";
  nombreValue: string='';

  constructor(private ordenService:OrdenService, private router:Router) { }

  ngOnInit(): void {

  }

  create(): void{
    console.log(this.orden);
  }
}
