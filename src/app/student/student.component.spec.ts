import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { StudentService } from '../student.service';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let mockService: Partial<StudentService>;
  beforeEach(async () => {
    mockService = {
      studentData : {name: 'test', result: 'fail'},
    };
    await TestBed.configureTestingModule({
      declarations: [ StudentComponent ],
      providers: [ { provide: StudentService, useValue: mockService } ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('student details should equal to the data provided by mock service', () => {
    expect(component.studentDetails).toEqual({name: 'test', result: 'fail'});
  });
  it('should validate if value is greater than 10', () => {
    const value = 20;
    expect(value).toBeGreaterThan(10);
  });
});
