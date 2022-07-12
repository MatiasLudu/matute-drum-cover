import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrumCoversComponent } from './drum-covers.component';

describe('DrumCoversComponent', () => {
  let component: DrumCoversComponent;
  let fixture: ComponentFixture<DrumCoversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrumCoversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrumCoversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
