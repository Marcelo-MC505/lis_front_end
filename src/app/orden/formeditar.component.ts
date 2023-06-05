import { Component } from '@angular/core';
import { Orden } from './orden';
import { OrdenService } from './orden.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formeditar',
  templateUrl: './formeditar.component.html',
  styleUrls: ['./formeditar.component.css']
})
export class FormeditarComponent {
  orden: Orden = new Orden();
  titulo: string="Editar Orden";

  constructor(private ordenService:OrdenService, private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar():void{

    this.activatedRoute.params.subscribe(
      e => {
        let id=e['idOrden'];
        if(id){
          this.ordenService.getOne(id).subscribe( 
            or=>this.orden=or
          );
        }
      }
    );
  }

  update(): void{
    this.ordenService.update(this.orden).subscribe(
      or => this.router.navigate(['/orden'])
    )
  }


}