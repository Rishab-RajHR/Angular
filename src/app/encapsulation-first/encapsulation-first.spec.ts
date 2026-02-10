import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationFirst } from './encapsulation-first';

describe('EncapsulationFirst', () => {
  let component: EncapsulationFirst;
  let fixture: ComponentFixture<EncapsulationFirst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationFirst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationFirst);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
