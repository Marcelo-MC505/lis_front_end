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
import { TipoordenComponent } from './orden/tipoorden/tipoorden.component';
import { EmpleadoComponent } from './orden/empleado/empleado.component';
import { FormeditarComponent } from './orden/formeditar/formeditar.component';

const routes:Routes=[
  { path:'', redirectTo:'/orden', pathMatch:'full'},
  { path:'orden', component:OrdenComponent},
  { path:'orden/formeditar', component:FormeditarComponent},
  { path:'orden/formeditar/:id', component:FormeditarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    OrdenComponent,
    TipoordenComponent,
    EmpleadoComponent
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
