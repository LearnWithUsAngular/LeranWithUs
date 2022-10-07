import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInstructorProfileComponent } from './edit-instructor-profile.component';

describe('EditInstructorProfileComponent', () => {
  let component: EditInstructorProfileComponent;
  let fixture: ComponentFixture<EditInstructorProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInstructorProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInstructorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
