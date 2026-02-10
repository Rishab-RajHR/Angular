import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncapsulationSecond } from './encapsulation-second';

describe('EncapsulationSecond', () => {
  let component: EncapsulationSecond;
  let fixture: ComponentFixture<EncapsulationSecond>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncapsulationSecond]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncapsulationSecond);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
