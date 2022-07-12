import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecadesDrumSeriesComponent } from './decades-drum-series.component';

describe('DecadesDrumSeriesComponent', () => {
  let component: DecadesDrumSeriesComponent;
  let fixture: ComponentFixture<DecadesDrumSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecadesDrumSeriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecadesDrumSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
