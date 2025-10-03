import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlIcon } from './sl-icon';

describe('SlIcon', () => {
  let component: SlIcon;
  let fixture: ComponentFixture<SlIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlIcon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
