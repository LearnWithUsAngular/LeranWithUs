import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DeleteCourseComponent } from './delete-course.component';

describe('DeleteCourseComponent', () => {
  let component: DeleteCourseComponent;
  let fixture: ComponentFixture<DeleteCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      declarations: [ DeleteCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
