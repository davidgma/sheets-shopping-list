import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlSettings } from './sl-settings';

describe('SlSettings', () => {
  let component: SlSettings;
  let fixture: ComponentFixture<SlSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
