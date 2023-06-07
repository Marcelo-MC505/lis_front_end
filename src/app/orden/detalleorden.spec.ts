import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Detalleorden } from './detalleorden';
import { OrdenComponent } from './orden.component';

describe('Detalleorden', () => {
let component: OrdenComponent;
let fixture: ComponentFixture<OrdenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenComponent ]
    });
    fixture = TestBed.createComponent(OrdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    });

    it('should create an instance', () => {
    expect(component).toBeTruthy();
    });
});
