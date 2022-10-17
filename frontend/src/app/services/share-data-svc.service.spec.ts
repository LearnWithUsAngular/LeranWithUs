import { TestBed } from '@angular/core/testing';

import { ShareDataSvcService } from './share-data-svc.service';

describe('ShareDataSvcService', () => {
  let service: ShareDataSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareDataSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
