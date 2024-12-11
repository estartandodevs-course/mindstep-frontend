import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasDiariasComponent } from './metas-diarias.component';

describe('MetasDiariasComponent', () => {
  let component: MetasDiariasComponent;
  let fixture: ComponentFixture<MetasDiariasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetasDiariasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetasDiariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
