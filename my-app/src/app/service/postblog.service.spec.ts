import { TestBed } from '@angular/core/testing';

import { PostService } from './postblog.service';

describe('PostblogService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
