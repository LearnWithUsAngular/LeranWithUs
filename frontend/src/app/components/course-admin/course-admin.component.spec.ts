import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { CourseAdminComponent } from './course-admin.component';

describe('CourseAdminComponent', () => {
  let component: CourseAdminComponent;
  let fixture: ComponentFixture<CourseAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [ CourseAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
