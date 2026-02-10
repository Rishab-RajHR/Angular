import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchCaseDirective } from './switch-case-directive';

describe('SwitchCaseDirective', () => {
  let component: SwitchCaseDirective;
  let fixture: ComponentFixture<SwitchCaseDirective>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchCaseDirective]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchCaseDirective);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
