import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeditarComponent } from './formeditar.component';

describe('FormeditarComponent', () => {
  let component: FormeditarComponent;
  let fixture: ComponentFixture<FormeditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormeditarComponent]
    });
    fixture = TestBed.createComponent(FormeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
