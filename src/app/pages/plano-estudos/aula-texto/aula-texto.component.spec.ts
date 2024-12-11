import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulaTextoComponent } from './aula-texto.component';

describe('AulaTextoComponent', () => {
  let component: AulaTextoComponent;
  let fixture: ComponentFixture<AulaTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AulaTextoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AulaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
