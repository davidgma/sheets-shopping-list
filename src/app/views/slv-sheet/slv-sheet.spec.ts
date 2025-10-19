import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlvSheet } from './slv-sheet';

describe('SlvSheet', () => {
  let component: SlvSheet;
  let fixture: ComponentFixture<SlvSheet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlvSheet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlvSheet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
