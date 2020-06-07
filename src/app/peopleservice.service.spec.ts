import { TestBed } from '@angular/core/testing';
import { PeopleserviceService } from './peopleservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeopleserviceService', () => {
  let service: PeopleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PeopleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
