import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenComponent } from './orden/orden.component';
import { TipoordenComponent } from './tipoorden/tipoorden.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormnuevaComponent } from './orden/formnueva.component';
import { PacienteComponent } from './paciente/paciente.component';
import { TiposervicioComponent } from './tiposervicio/tiposervicio.component';

const routes:Routes=[
  { path:'', redirectTo:'/orden', pathMatch:'full'},
  { path:'orden', component:OrdenComponent},
  { path:'orden/formnueva', component:FormnuevaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    TipoordenComponent,
    EmpleadoComponent,
    FormnuevaComponent,
    PacienteComponent,
    TiposervicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
