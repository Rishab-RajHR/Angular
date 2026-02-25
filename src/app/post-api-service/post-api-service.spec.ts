import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostApiService } from './post-api-service';

describe('PostApiService', () => {
  let component: PostApiService;
  let fixture: ComponentFixture<PostApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostApiService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostApiService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
