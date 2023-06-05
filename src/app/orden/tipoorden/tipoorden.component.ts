import { Component } from '@angular/core';
import { TipoOrden } from '../tipo-orden';
import { TipoOrdenService } from '../tipo-orden.service';

@Component({
  selector: 'app-tipoorden',
  templateUrl: './tipoorden.component.html',
  styleUrls: ['./tipoorden.component.css']
})
export class TipoordenComponent {
  tipoordenes: TipoOrden[] = [];

  constructor(private tipoordenService:TipoOrdenService) { }

  ngOnInit(): void{
    this.tipoordenService.getAll().subscribe(
      to => this.tipoordenes=to
    )
  }
}
