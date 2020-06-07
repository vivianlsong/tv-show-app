import { TestBed } from '@angular/core/testing';
import { ScheduleService } from './scheduleservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ScheduleService', () => {
  let service: ScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
