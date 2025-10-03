import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlCookies } from './sl-cookies';

describe('SlCookies', () => {
  let component: SlCookies;
  let fixture: ComponentFixture<SlCookies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlCookies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlCookies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
