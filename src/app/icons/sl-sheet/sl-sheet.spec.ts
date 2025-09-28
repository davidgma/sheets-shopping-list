import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlSheet } from './sl-sheet';

describe('SlSheet', () => {
  let component: SlSheet;
  let fixture: ComponentFixture<SlSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
