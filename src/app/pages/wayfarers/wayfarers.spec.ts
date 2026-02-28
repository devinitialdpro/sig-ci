import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayfarersComponent } from './wayfarers';

describe('WayfarersComponent', () => {
  let component: WayfarersComponent;
  let fixture: ComponentFixture<WayfarersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WayfarersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WayfarersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
