import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlItems } from './sl-items';

describe('SlItems', () => {
  let component: SlItems;
  let fixture: ComponentFixture<SlItems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlItems]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlItems);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
