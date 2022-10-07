import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorPasswordChangeComponent } from './instructor-password-change.component';

describe('InstructorPasswordChangeComponent', () => {
  let component: InstructorPasswordChangeComponent;
  let fixture: ComponentFixture<InstructorPasswordChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
