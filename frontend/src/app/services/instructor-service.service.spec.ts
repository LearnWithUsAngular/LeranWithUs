import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InstructorServiceService } from './instructor-service.service';

describe('InstructorServiceService', () => {
  let service: InstructorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(InstructorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
