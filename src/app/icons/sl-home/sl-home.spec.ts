import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlHome } from './sl-home';

describe('SlHome', () => {
  let component: SlHome;
  let fixture: ComponentFixture<SlHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
