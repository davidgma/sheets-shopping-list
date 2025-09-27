import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlItem } from './sl-item';

describe('SlItem', () => {
  let component: SlItem;
  let fixture: ComponentFixture<SlItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
