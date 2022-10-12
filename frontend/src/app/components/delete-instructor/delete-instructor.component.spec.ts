import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DeleteInstructorComponent } from './delete-instructor.component';

describe('DeleteInstructorComponent', () => {
  let component: DeleteInstructorComponent;
  let fixture: ComponentFixture<DeleteInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
      declarations: [ DeleteInstructorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
