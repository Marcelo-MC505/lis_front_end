import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoordenComponent } from './tipoorden.component';

describe('TipoordenComponent', () => {
  let component: TipoordenComponent;
  let fixture: ComponentFixture<TipoordenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TipoordenComponent]
    });
    fixture = TestBed.createComponent(TipoordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
