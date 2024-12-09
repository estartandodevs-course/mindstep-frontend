import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoEstudosComponent } from './plano-estudos.component';

describe('PlanoEstudosComponent', () => {
  let component: PlanoEstudosComponent;
  let fixture: ComponentFixture<PlanoEstudosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlanoEstudosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlanoEstudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
