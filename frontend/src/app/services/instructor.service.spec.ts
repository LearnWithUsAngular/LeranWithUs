import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { InstructorService } from './instructor.service';

describe('InstructorService', () => {
  let service: InstructorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(InstructorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
