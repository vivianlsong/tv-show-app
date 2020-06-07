import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PeoplesearchComponent } from './peoplesearch.component';
import { HttpClientModule } from '@angular/common/http';

describe('PeoplesearchComponent', () => {
  let component: PeoplesearchComponent;
  let fixture: ComponentFixture<PeoplesearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesearchComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
