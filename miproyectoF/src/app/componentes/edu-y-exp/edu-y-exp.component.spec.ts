import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduYExpComponent } from './edu-y-exp.component';

describe('EduYExpComponent', () => {
  let component: EduYExpComponent;
  let fixture: ComponentFixture<EduYExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EduYExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EduYExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
