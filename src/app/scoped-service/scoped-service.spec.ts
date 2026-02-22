import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopedService } from './scoped-service';

describe('ScopedService', () => {
  let component: ScopedService;
  let fixture: ComponentFixture<ScopedService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScopedService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScopedService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
