import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostListenerExample } from './host-listener-example';

describe('HostListenerExample', () => {
  let component: HostListenerExample;
  let fixture: ComponentFixture<HostListenerExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostListenerExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostListenerExample);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
