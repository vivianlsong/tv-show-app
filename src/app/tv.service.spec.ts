import { TestBed } from '@angular/core/testing';
import { TvService } from './tv.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TvService', () => {
  let service: TvService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
