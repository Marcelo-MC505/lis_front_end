import { Component, OnInit } from '@angular/core';
import { Orden } from './orden';
import { OrdenService } from './orden.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit{
  ordenes: Orden[] = [];
  
  constructor(private ordenService:OrdenService) { }

  ngOnInit(): void {
      this.ordenService.getAll().subscribe(
        o => this.ordenes=o
      );
  }
}
