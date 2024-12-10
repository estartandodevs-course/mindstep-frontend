import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStepOnePageComponent } from './registration-step-one-page.component';

describe('RegistrationStepOnePageComponent', () => {
  let component: RegistrationStepOnePageComponent;
  let fixture: ComponentFixture<RegistrationStepOnePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrationStepOnePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistrationStepOnePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
