import { TestBed } from '@angular/core/testing';
import { TvService } from './tv.service';
import { HttpClientModule } from '@angular/common/http';

describe('TvService', () => {
  let service: TvService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
