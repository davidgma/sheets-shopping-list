import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlvSettings } from './slv-settings';

describe('SlvSettings', () => {
  let component: SlvSettings;
  let fixture: ComponentFixture<SlvSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlvSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlvSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
