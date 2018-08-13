import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveTimelineComponent } from './responsive-timeline.component';

describe('ResponsiveTimelineComponent', () => {
  let component: ResponsiveTimelineComponent;
  let fixture: ComponentFixture<ResponsiveTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
