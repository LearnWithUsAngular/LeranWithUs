import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InstructorPasswordChangeComponent } from './instructor-password-change.component';

describe('InstructorPasswordChangeComponent', () => {
  let component: InstructorPasswordChangeComponent;
  let fixture: ComponentFixture<InstructorPasswordChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ InstructorPasswordChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructorPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
