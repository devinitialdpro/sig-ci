import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitteComponent } from './committe';

describe('CommitteComponent', () => {
  let component: CommitteComponent;
  let fixture: ComponentFixture<CommitteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommitteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
