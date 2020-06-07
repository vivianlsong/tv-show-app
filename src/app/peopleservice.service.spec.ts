import { TestBed } from '@angular/core/testing';
import { PeopleserviceService } from './peopleservice.service';
import { HttpClientModule } from '@angular/common/http';

describe('PeopleserviceService', () => {
  let service: PeopleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(PeopleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
