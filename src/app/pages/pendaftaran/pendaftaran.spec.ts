import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pendaftaran } from './pendaftaran';

describe('Pendaftaran', () => {
  let component: Pendaftaran;
  let fixture: ComponentFixture<Pendaftaran>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pendaftaran]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pendaftaran);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
