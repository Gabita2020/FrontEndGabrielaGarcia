import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeienciaComponent } from './expeiencia.component';

describe('ExpeienciaComponent', () => {
  let component: ExpeienciaComponent;
  let fixture: ComponentFixture<ExpeienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpeienciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpeienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
