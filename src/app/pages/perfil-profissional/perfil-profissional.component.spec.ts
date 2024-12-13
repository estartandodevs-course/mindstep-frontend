import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilProfissionalComponent } from './perfil-profissional.component';

describe('PerfilProfissionalComponent', () => {
  let component: PerfilProfissionalComponent;
  let fixture: ComponentFixture<PerfilProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilProfissionalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
