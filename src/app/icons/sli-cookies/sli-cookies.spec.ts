import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliCookies } from './sli-cookies';

describe('SliCookies', () => {
  let component: SliCookies;
  let fixture: ComponentFixture<SliCookies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliCookies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliCookies);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
