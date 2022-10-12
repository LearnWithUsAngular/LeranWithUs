import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourseServiceService } from './course-service.service';

describe('CourseServiceService', () => {
  let service: CourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
      ]
    });
    service = TestBed.inject(CourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
