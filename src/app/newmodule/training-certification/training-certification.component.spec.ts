import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingCertificationComponent } from './training-certification.component';

describe('TrainingCertificationComponent', () => {
  let component: TrainingCertificationComponent;
  let fixture: ComponentFixture<TrainingCertificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingCertificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
