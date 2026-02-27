import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutApiService } from './put-api-service';

describe('PutApiService', () => {
  let component: PutApiService;
  let fixture: ComponentFixture<PutApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutApiService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutApiService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
