import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetApiMethod } from './get-api-method';

describe('GetApiMethod', () => {
  let component: GetApiMethod;
  let fixture: ComponentFixture<GetApiMethod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetApiMethod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetApiMethod);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
