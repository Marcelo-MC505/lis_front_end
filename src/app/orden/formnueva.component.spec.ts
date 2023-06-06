import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnuevaComponent } from './formnueva.component';

describe('FormnuevaComponent', () => {
  let component: FormnuevaComponent;
  let fixture: ComponentFixture<FormnuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormnuevaComponent]
    });
    fixture = TestBed.createComponent(FormnuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
