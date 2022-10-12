import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { InstructorAdminComponent } from './instructor-admin.component';

describe('InstructorAdminComponent', () => {
  let component: InstructorAdminComponent;
  let fixture: ComponentFixture<InstructorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [ InstructorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
