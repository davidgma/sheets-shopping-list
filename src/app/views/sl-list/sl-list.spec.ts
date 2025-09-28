import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlList } from './sl-list';

describe('SlList', () => {
  let component: SlList;
  let fixture: ComponentFixture<SlList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
