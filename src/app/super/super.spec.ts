import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Super } from './super';

describe('Super', () => {
  let component: Super;
  let fixture: ComponentFixture<Super>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Super]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Super);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
