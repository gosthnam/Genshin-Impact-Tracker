import { TestBed } from '@angular/core/testing';

import { CharactersResolverService } from './characters-resolver.service';

describe('CharactersResolverService', () => {
  let service: CharactersResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
