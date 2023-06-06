import { Component } from '@angular/core';
import { TipoOrden } from '../orden/tipo-orden';
import { TipoOrdenService } from '../orden/tipo-orden.service';

@Component({
  selector: 'app-tipoorden',
  templateUrl: './tipoorden.component.html',
  styleUrls: ['./tipoorden.component.css']
})
export class TipoordenComponent {
  tipoorden: TipoOrden[] = [];

  constructor(private tipoordenService:TipoOrdenService) { }

  ngOnInit(): void {
    this.tipoordenService.getAll().subscribe(
      to => this.tipoorden = to
    );
  }
}
