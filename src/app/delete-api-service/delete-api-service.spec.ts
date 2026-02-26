import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteApiService } from './delete-api-service';

describe('DeleteApiService', () => {
  let component: DeleteApiService;
  let fixture: ComponentFixture<DeleteApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteApiService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteApiService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
