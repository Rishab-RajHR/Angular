import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorHandlingInterpolation } from './error-handling-interpolation';

describe('ErrorHandlingInterpolation', () => {
  let component: ErrorHandlingInterpolation;
  let fixture: ComponentFixture<ErrorHandlingInterpolation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorHandlingInterpolation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorHandlingInterpolation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
