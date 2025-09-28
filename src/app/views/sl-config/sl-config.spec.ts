import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlConfig } from './sl-config';

describe('SlConfig', () => {
  let component: SlConfig;
  let fixture: ComponentFixture<SlConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlConfig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlConfig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
