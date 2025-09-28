import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlNav } from './sl-nav';

describe('SlNav', () => {
  let component: SlNav;
  let fixture: ComponentFixture<SlNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlNav]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
