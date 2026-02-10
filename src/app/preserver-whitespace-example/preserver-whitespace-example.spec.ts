import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreserverWhitespaceExample } from './preserver-whitespace-example';

describe('PreserverWhitespaceExample', () => {
  let component: PreserverWhitespaceExample;
  let fixture: ComponentFixture<PreserverWhitespaceExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreserverWhitespaceExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreserverWhitespaceExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
