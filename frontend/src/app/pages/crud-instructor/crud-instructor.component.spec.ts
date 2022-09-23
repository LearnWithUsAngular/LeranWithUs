import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudInstructorComponent } from './crud-instructor.component';

describe('CrudInstructorComponent', () => {
  let component: CrudInstructorComponent;
  let fixture: ComponentFixture<CrudInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
